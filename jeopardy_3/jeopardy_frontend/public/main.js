const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('node:path');
const url = require('url');
const extract_data_from_csv = require('../src/shared/read_questions/read_questions');
import { channels } from '../src/shared/constants';

filename = '../../2023-24_ISA_Jeopardy_Questions.csv';

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
      nodeIntegration: true,
    },
  });

  const menu = Mneu.buildFromTemplate([
    {
      label: app.name,
      submenu: [
        {
          click: () => win.webContents.send('read:csv', filename),
          label: 'csv',
        },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);

  win.loadURL(startUrl);
}

app.whenReady().then(() => {
  createWindow;

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// create method to publish and subscribe to ipc
ipcMain.handle('read:csv', async (_, args) => {
  console.log('running cli', _, args);
  let result;
  if (args) {
    const csv_data = extract_data_from_csv(args);

    result = execSync(csv_data).toString();
  }
  return result;
});

const products = {
  notebook: {
    name: 'notebook',
    price: '2500',
    color: 'grey',
  },
  headphone: {
    name: 'headphone',
    price: '700',
    color: 'black',
  },
};

ipcMain.on(channels.GET_DATA, (event, arg) => {
  const { product } = arg;
  console.log(product);
});
