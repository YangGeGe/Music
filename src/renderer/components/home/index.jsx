import React from 'react';

const electron = window.require('electron');
const { ipcRenderer } = electron;

// import style from './test.less';

class Hello extends React.Component {
  a() {
    ipcRenderer.send('window-max');
  }

  render() {
    return (
      <div onClick={ () => { this.a(); } }>
        HelloMessage
      </div>
    );
  }
}

export default Hello;
