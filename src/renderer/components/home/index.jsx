import React from 'react';
import InfinityScroll from '../InfinityScroll';

import styles from './test.less';

/*
 * const electron = window.require('electron');
 * const { ipcRenderer } = electron;
 */

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    this.addData = this.addData.bind(this);
  }

  a() {
    // ipcRenderer.send('window-max');
  }

  addData() {
    const {
      data,
    } = this.state;
    this.setState({
      data: [...data, ...data.map(x => x + 10)],
    });
  }

  render() {
    const {
      data,
    } = this.state;
    return (
      <div onClick={ () => { this.a(); } }>
        <InfinityScroll
          itemHeight={ 50 }
          itemMarginTop={ 10 }
          viewHeight={ 200 }
          viewWidth={ 200 }
          sourceList={ data }
          rightOffBottom={ this.addData }
        />
      </div>
    );
  }
}

export default Hello;
