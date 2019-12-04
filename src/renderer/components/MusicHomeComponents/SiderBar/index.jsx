import React from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import SiderBarMenu from '../SubMenu';
import WindowAction from '../../common/WindowAction';
import { Modular } from '../../constraint';
import {
  getPlatform,
} from '../../../utils';

function SiderBar() {
  const isWIn = getPlatform() === 'WIN';
  return (
    <div styleName="siderBar">
      {
        !isWIn ? <WindowAction/> : ''
      }
      <div styleName="user">
        <img src="http://img1.imgtn.bdimg.com/it/u=3636610533,1617274814&fm=26&gp=0.jpg" alt=""/>
        <div styleName="userInfo">
          <span styleName="userName" title="派大星">派大星</span>
          <span title="我是海绵宝宝的朋友">我是海绵宝宝的朋友</span>
        </div>
      </div>
      <div>
        {
          Modular.map(modular => (
            <SiderBarMenu
              key={ modular.key }
              title={ modular.title }
              menuList={ modular.modular }
            />
          ))
        }
      </div>
    </div>
  );
}

export default CSSModules(SiderBar, style, { allowMultiple: true });
