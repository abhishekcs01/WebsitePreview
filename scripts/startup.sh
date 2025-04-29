#!/bin/bash
set -e
 
echo "[startup.sh] Starting Raaghu React Preview services..."
 
# Ensure chokidar is installed globally
if ! npm list -g chokidar > /dev/null 2>&1; then
  echo "[startup.sh] Installing chokidar globally..."
  npm install -g chokidar
else
  echo "[startup.sh] chokidar is already installed globally."
fi
 
# Install dependencies and build (you can make this conditional if needed)
echo "[startup.sh] Installing project dependencies..."
cd /workspaces/AI-Pundit-Preview/raaghu-react
npm ci
npm run install-all
 
cd raaghu-react-themes
npm ci
npm run build
 
# Start Vite Dev Server if not already running
if ! pgrep -f "vite"; then
  echo "[startup.sh] Starting Vite dev server..."
  (cd /workspaces/AI-Pundit-Preview/raaghu-react/raaghu-pages && npm run dev) &
else
  echo "[startup.sh] Vite dev server already running."
fi
 
# Start File Sync Service if not already running
if ! pgrep -f "file-sync-service.js"; then
  echo "[startup.sh] Starting file sync service..."
  node /workspaces/AI-Pundit-Preview/file-sync-service.js &
else
  echo "[startup.sh] File sync service already running."
fi
 
# Start Backend Server if not already running
if ! pgrep -f "server.js"; then
  echo "[startup.sh] Pulling latest and starting backend server..."
  cd /workspaces/AI-Pundit-Preview
  git pull origin main
  node server.js &
else
  echo "[startup.sh] Backend server already running."
fi
 
echo "[startup.sh] All services launched."
wait