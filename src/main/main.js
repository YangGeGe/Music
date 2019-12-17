const {
  Menu,
  Tray,
  BrowserWindow,
} = require('electron');
const os = require('os');
const path = require('path');
const windowSystem = require('./ipcMain/windowSystem');
const appSystem = require('./appSystem');
const trayMenuTemplate = require('./trayMenu');

const platForm = os.platform() === 'win32';

// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow = null;
let appTray = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1020,
    minHeight: 660,
    frame: !platForm,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  /*
   * 加载应用-----  electron-quick-start中默认的加载入口
   * mainWindow.loadURL(url.format({
   * pathname: path.join(__dirname, 'index.html'),
   * protocol: 'file:',
   * slashes: true
   * }))
   */
  // 加载应用----适用于 react 项目
  mainWindow.loadURL('http://localhost:8081/');

  // 打开开发者工具，默认不打开
  mainWindow.webContents.openDevTools();

  // 系统托盘
  const iconPath = path.join(__dirname, '../renderer/assets/imgs/tray.png');
  appTray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
  appTray.setToolTip('洋哥哥音乐');
  appTray.setContextMenu(contextMenu);

  platForm === true && mainWindow.hookWindowMessage(278, () => {
    mainWindow.setEnabled(false);
    setTimeout(() => {
      mainWindow.setEnabled(true);
    }, 100);
    return true;
  });

  windowSystem(mainWindow);
}

appSystem(createWindow, mainWindow);
