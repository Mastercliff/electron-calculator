const electron = require('electron')
const {app, BrowserWindow, Menu} = require('electron')


function createWindow(){
    let window_1 = new BrowserWindow({
        width: 360,
        minWidth: 360,
        height: 520,
        minHeight:520,
        webPreferences :{
            nodeIntegration : true
        }
    })
    
    window_1.loadFile('index.html')
}

Menu.setApplicationMenu(false)
app.on('ready', createWindow)