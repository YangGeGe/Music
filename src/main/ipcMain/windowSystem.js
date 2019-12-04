const {
  ipcMain,
} = require('electron');

const windowSystem = (mainWindow) => {
  const windowActions = {
    'window-max': () => {
      if (mainWindow.isMaximized()) {
        mainWindow.restore();
      } else {
        mainWindow.maximize();
      }
    },
    'window-min': () => {
      mainWindow.minimize();
    },
    close: () => {
      mainWindow.close();
    },
  };

  Object.keys(windowActions).forEach(action => {
    ipcMain.on(action, windowActions[action]);
  });
};

module.exports = windowSystem;
