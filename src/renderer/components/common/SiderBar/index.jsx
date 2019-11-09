import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function SiderBar(props) {
  useEffect(()=>{
    
  })

  return (
    <div styleName='siderBar'>
      <div>
        <span className='iconfont'>&#xe615;</span>
        <span>Owner</span>
      </div>
      <div>
        列表
      </div>
      <div>
        我的音乐列表
      </div>
      <div>
        添加音乐列表
      </div>
    </div>
  );
}

export default CSSModules(SiderBar,style);