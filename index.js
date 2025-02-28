const { app, BrowserWindow } = require("electron");

function makeWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 500,
        resizable: false,
        autoHideMenuBar: true
    });

    window.loadFile("./src/index.html");
}

app.whenReady().then(() => {
    makeWindow();
})

app.on("window-all-closed",() => {
    if (process.platform != "darwin") {
        process.exit();
    }
})