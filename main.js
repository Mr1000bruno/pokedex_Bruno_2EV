const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { scrapePokemonInfo } = require('./scraper');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on('get-pokemon-info', async (event, { searchType, query }) => {
    try {
        const info = await scrapePokemonInfo(searchType, query);
        mainWindow.webContents.send('pokemon-info', info);
    } catch (error) {
        mainWindow.webContents.send('pokemon-info', { error: error.message });
    }
});

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