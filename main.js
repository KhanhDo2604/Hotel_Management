// Packages
const { BrowserWindow, app } = require('electron');
const isDev = require('electron-is-dev');
const { join } = require('path')


app.on('ready', _ => {

    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 900,
        webPreferences: {
            nodeIntegration: false,
        },
    })

    const url = isDev
        ? 'http://localhost:3000'
        : format({
            pathname: join(__dirname, '../renderer/out/index.html'),
            protocol: 'file:',
            slashes: true,
        });

    mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', _ => {
    if (process.platform != "darwin")
        app.quit();
});
