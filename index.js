const { app, BrowserWindow } = require("electron");

function makeWindow() {
    const window = new BrowserWindow({
        width: 500,
        height: 500,
        minWidth:64,
        minHeigt:64,
        resizable: true,
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