// Packages
const { BrowserWindow, app, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const { join } = require('path')
const settings = require("electron-settings");

ipcMain.on("save-token", (event, token,user) => {
    settings.setSync("token", token);
    settings.setSync("user",user);
    console.log(token);
});

ipcMain.on("get-token", (event, _) => {
    event.returnValue = settings.getSync("token");
})

ipcMain.on("get-user",(event, _)=>{
    event.returnValue = settings.getSync("user");
})

app.on('ready', _ => {

    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
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
