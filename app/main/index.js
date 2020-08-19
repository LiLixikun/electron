const { app, BrowserWindow, ipcMain } = require('electron')
const isDev = require('electron-is-dev');
const debug = require('electron-debug');
const Store = require('electron-store');

const name = require('./windows')
console.log(name);

const store = new Store();
const path = require('path')
debug();

store.set('unicorn', '🦄🐂');

let win
app.on('ready', () => {
    win = new BrowserWindow({
        width: 600,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        },
        show: false,
    })
    win.on('ready-to-show', () => {
        win.show()
        console.log(store.get('unicorn'));
    })
    if (isDev) {
        win.loadURL('http://localhost:3000')
    } else {
        win.loadFile(path.resolve(__dirname, '../renderer/pages/main/index.html'))
    }
})

ipcMain.handle('invokable-ipc', async (event, ...arg) => {
    console.log(arg);
    const result = await "我是main 返回的"
    return result
})