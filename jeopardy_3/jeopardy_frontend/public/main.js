const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const url = require('url');

// const path = require('path');

function createWindow() {
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    });

  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // nodeIntegration: true,
      // enableRemoteModule: true,
    },
    title: 'jeop3',
    // frame: false, // hides the frame i.e. the ui to close, minimize, maximize
  });

  win.loadURL(startUrl);
  // win.removeMenu(); // helpful for removing menu in windows

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}

// function createWindow() {
//   const startUrl =
//     process.env.ELECTRON_START_URL ||
//     URL.format({
//       pathname: path.join(__dirname, 'index.html'),
//       protocol: 'file:',
//       slashes: true,
//     });

//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//       preload: __dirname + 'preload.js',
//     },
//   });

//   win.loadURL(startUrl);

//   app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//       app.quit();
//     }
//   });
// }

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
