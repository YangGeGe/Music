const {
  app,
} = require('electron');

const appSystem = (createWindow, mainWindow) => {
  const windowActions = {
    ready: () => {
      createWindow();
    },
    'window-all-closed': () => {
      // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
      if (process.platform !== 'darwin') {
        app.quit();
      }
    },
    activate: () => {
      // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
      if (mainWindow === null) {
        createWindow();
      }
    },
  };

  Object.keys(windowActions).forEach(action => {
    app.on(action, windowActions[action]);
  });
};

module.exports = appSystem;
