import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.less';
import Search from '../Search';

export default CSSModules(function Header() {
  return (
    <div styleName="drag">
      <Search/>
    </div>
  );
}, styles);

