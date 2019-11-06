import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function SiderBar(props) {
  useEffect(()=>{
    
  })

  return (
    <div styleName='siderBar'>
      <div style={{marginBottom:'200px'}}>侧边栏</div>
      <div style={{marginBottom:'200px'}}>侧边栏</div>
      <div style={{marginBottom:'200px'}}>侧边栏</div>
      <div style={{marginBottom:'200px'}}>侧边栏</div>
    </div>
  );
}

export default CSSModules(SiderBar,style);