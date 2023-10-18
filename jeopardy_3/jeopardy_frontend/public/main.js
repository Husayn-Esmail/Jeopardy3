// EVERYTHING COMMENTED OUT IS ORIGINAL CODE
const { app, BrowserWindow, ipcMain } = require('electron');
// const path = require('node:path');
const path = require('path');
const url = require('url');
// const extract_data_from_csv = require('../src/shared/read_questions/read_questions');
// import { channels } from '../src/shared/constants';

filename = '../../2023-24_ISA_Jeopardy_Questions.csv';

function handleSetTitle(event, title) {
  // used in the ipc main test
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
  console.log('running handleSetTitle');
}

function createWindow() {
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      // pathnaem: path.join(__dirname, '/../index.html'),
      protocol: 'file:',
      slashes: true,
    });

  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true,
    },
  });

  // ipcMain.on('set-title', (event, title) => {
  //   const webContents = event.sender;
  //   const second_win = BrowserWindow.fromWebContents(webContents);
  //   second_win.setTitle(title);
  // });

  // const menu = Menu.buildFromTemplate([
  //   {
  //     label: app.name,
  //     submenu: [
  //       {
  //         click: () => win.webContents.send('read:csv', filename),
  //         label: 'csv',
  //       },
  //     ],
  //   },
  // ]);

  // Menu.setApplicationMenu(menu);
  win.loadURL(startUrl);
}

// app.whenReady().then(() => {
//   ipcMain.on('set-title', handleSetTitle);
//   createWindow();

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

app.whenReady().then(() => {
  ipcMain.on('set-title', handleSetTitle);
  createWindow();
});

// used to handle mac os
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// used to handle mac os when the window is closed but app is running
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// create method to publish and subscribe to ipc
// ipcMain.handle('read:csv', async (_, args) => {
//   console.log('running cli', _, args);
//   let result;
//   if (args) {
//     const csv_data = extract_data_from_csv(args);

//     result = execSync(csv_data).toString();
//   }
//   return result;
// });

// const products = {
//   notebook: {
//     name: 'notebook',
//     price: '2500',
//     color: 'grey',
//   },
//   headphone: {
//     name: 'headphone',
//     price: '700',
//     color: 'black',
//   },
// };

// ipcMain.on(channels.GET_DATA, (event, arg) => {
//   const { product } = arg;
//   console.log(product);
// });
