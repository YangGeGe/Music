import React from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import SiderBarMenu from './SubMenu';
import User from './User';
import { Modular } from '../../constraint';

function SiderBar() {
  return (
    <div styleName="siderBar">
      <User/>
      <div>
        {
          Modular.map(modular => (
            <SiderBarMenu
              key={ modular.key }
              title={ modular.title }
              menuList={ modular.modular }
              menuGroupKey={ modular.key }
            />
          ))
        }
      </div>
    </div>
  );
}

export default CSSModules(SiderBar, style);
