import React from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function User() {
  return (
    <div styleName="user">
      <img src="http://img1.imgtn.bdimg.com/it/u=3636610533,1617274814&fm=26&gp=0.jpg" alt=""/>
      <div styleName="userInfo">
        <span styleName="userName" title="派大星">派大星</span>
        <span styleName="personalCenter" title="个人中心">个人中心</span>
      </div>
    </div>
  );
}

export default CSSModules(User, style);
