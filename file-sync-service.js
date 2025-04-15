const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

// Configuration
const SOURCE_DIR = '/workspaces/WebsitePreview/generated_code'; // Where AI-generated code will be placed
const TARGET_DIR = '/workspaces/WebsitePreview/raaghu-react/raaghu-pages/src'; // Where files should be copied to

// Create source directory if it doesn't exist
if (!fs.existsSync(SOURCE_DIR)) {
  fs.mkdirSync(SOURCE_DIR, { recursive: true });
  console.log(`Created source directory: ${SOURCE_DIR}`);
}

// Function to synchronize a file from source to target
function syncFile(filePath) {
  try {
    // Calculate the relative path from SOURCE_DIR
    const relativePath = path.relative(SOURCE_DIR, filePath);
    // Calculate the target path
    const targetPath = path.join(TARGET_DIR, relativePath);
    // Create target directory if it doesn't exist
    const targetDir = path.dirname(targetPath);
    
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Copy the file
    fs.copyFileSync(filePath, targetPath);
    console.log(`Synchronized: ${relativePath}`);
  } catch (error) {
    console.error(`Error synchronizing ${filePath}:`, error);
  }
}

// Function to remove a file from target when deleted from source
function removeFile(filePath) {
  try {
    // Calculate the relative path from SOURCE_DIR
    const relativePath = path.relative(SOURCE_DIR, filePath);
    // Calculate the target path
    const targetPath = path.join(TARGET_DIR, relativePath);
    
    // Check if file exists before attempting to delete
    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
      console.log(`Removed: ${relativePath}`);
      
      // Check if directory is empty, and if so, remove it
      const targetDir = path.dirname(targetPath);
      const files = fs.readdirSync(targetDir);
      if (files.length === 0) {
        fs.rmdirSync(targetDir);
        console.log(`Removed empty directory: ${path.relative(TARGET_DIR, targetDir)}`);
      }
    }
  } catch (error) {
    console.error(`Error removing ${filePath}:`, error);
  }
}

// Initialize file watcher
console.log(`Starting file watcher on ${SOURCE_DIR}`);
const watcher = chokidar.watch(SOURCE_DIR, {
  persistent: true,
  ignoreInitial: false, // Process existing files on startup
  awaitWriteFinish: {
    stabilityThreshold: 500,
    pollInterval: 100
  }
});

// Set up event listeners
watcher
  .on('add', filePath => syncFile(filePath))
  .on('change', filePath => syncFile(filePath))
  .on('unlink', filePath => removeFile(filePath))
  .on('error', error => console.error(`Watcher error: ${error}`));

console.log('File synchronization service is running...');
console.log(`Place generated code in ${SOURCE_DIR} to have it automatically reflected in ${TARGET_DIR}`);