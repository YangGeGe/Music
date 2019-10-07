const { Menu, BrowserWindow } = require('electron');
const template = [
  {
      label: '操作',
      submenu: [{
          label: '复制',
          accelerator: 'CmdOrCtrl+C',
          role: 'copy'
      }, {
          label: '粘贴',
          accelerator: 'CmdOrCtrl+V',
          role: 'paste'
      }, {
          label: '重新加载',
          accelerator: 'CmdOrCtrl+R',
          click: function (item, focusedWindow) {
              if (focusedWindow) {
                  if (focusedWindow.id === 1) {
                      BrowserWindow.getAllWindows().forEach(function (win) {
                          if (win.id > 1) {
                              win.close()
                          }
                      })
                  }
                  focusedWindow.reload()
              }
          }
      }]
  }
];
const menu = Menu.setApplicationMenu(Menu.buildFromTemplate(template));
module.exports = menu;