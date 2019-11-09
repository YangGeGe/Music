const {
  ipcMain,
} = require('electron');

const windowResize = (mainWindow) => {
  ipcMain.on('window-max', function () {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  });
};

const ipcMainHandle = {
  windowResize,
};

module.exports = ipcMainHandle;
