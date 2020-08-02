// code reference: https://dev.to/ahmedmkamal/build-desktop-apps-with-the-power-of-angular-18g7
import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const INDEX_FILE_PATH = path.join(__dirname, '../dist/index.html');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // Load the angular app.
  // Make sure that this path targets the index.html of the
  // angular application (the distribution).
  win.loadFile(INDEX_FILE_PATH);

  // Open the DevTools.
  // win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi-windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when the Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});
