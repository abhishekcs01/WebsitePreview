// server.js — run inside your Codespace

const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const UPLOAD_DIR = path.join(__dirname, 'received_files');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const wss = new WebSocket.Server({ port: 8080 });
console.log('WebSocket server started on port 8080');
console.log(`Files will be saved to: ${UPLOAD_DIR}`);

wss.on('connection', (ws) => {
    console.log('Client connected');
    let messageBuffer = '';

    ws.on('message', (message) => {
        try {
            const messageStr = Buffer.isBuffer(message) ? message.toString('utf8') : message.toString();
            console.log('Received message of length:', messageStr.length);

            // Try to parse the message as JSON
            try {
                const fileData = JSON.parse(messageStr);
                console.log(`Successfully parsed JSON with ${fileData.length} files`);

                // Process each file in the array
                fileData.forEach(file => {
                    const { FilePath, Content } = file;

                    if (FilePath && Content) {
                        // Create directory structure if needed
                        const fullPath = path.join(UPLOAD_DIR, FilePath);
                        const dirName = path.dirname(fullPath);

                        if (!fs.existsSync(dirName)) {
                            fs.mkdirSync(dirName, { recursive: true });
                        }

                        // Write file content
                        fs.writeFileSync(fullPath, Content);
                        console.log(`→ Created file: ${FilePath}`);
                    }
                });

                // Send confirmation
                ws.send(JSON.stringify({
                    type: 'complete',
                    message: `Successfully processed ${fileData.length} files`
                }));
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError.message);
                // If we couldn't parse as JSON, try legacy protocol
                handleLegacyProtocol(ws, messageStr);
            }
        } catch (err) {
            console.error('Error processing message:', err);
            ws.send(JSON.stringify({
                type: 'error',
                message: 'Error processing files: ' + err.message
            }));
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (err) => console.error('WebSocket error:', err));
});

// Handle the legacy protocol for backward compatibility
function handleLegacyProtocol(ws, message) {
    let currentFile = null;
    let fileStream = null;

    try {
        const cmd = JSON.parse(message);

        if (cmd && cmd.type === 'start') {
            currentFile = cmd.filename;
            console.log(`→ START ${currentFile} (${cmd.size} bytes)`);
            fileStream = fs.createWriteStream(path.join(UPLOAD_DIR, currentFile));
            return ws.send(JSON.stringify({ type: 'ready', filename: currentFile }));
        }

        if (cmd && cmd.type === 'end') {
            console.log(`→ END ${currentFile}`);
            if (fileStream) fileStream.end();
            ws.send(JSON.stringify({ type: 'complete', filename: currentFile }));
            currentFile = null;
            fileStream = null;
            return;
        }

        // Anything else is unexpected
        console.error('✖ Unhandled command:', cmd);
        ws.send(JSON.stringify({
            type: 'error',
            message: 'invalid command or no transfer in progress'
        }));
    } catch (err) {
        console.error('Error handling legacy protocol:', err);
        ws.send(JSON.stringify({
            type: 'error',
            message: 'Error in legacy protocol: ' + err.message
        }));
    }
}