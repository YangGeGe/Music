import React from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import SiderBarMenu from './SubMenu';
import User from './User';
import ActionHook from '../ActionHook';
import Dragabled from './Dragabled';

function SiderBar() {
  return (
    <div styleName="siderBar">
      <Dragabled/>
      <ActionHook/>
      <User/>
      <SiderBarMenu/>
    </div>
  );
}

export default CSSModules(SiderBar, style);
