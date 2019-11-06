import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function History(props) {
  useEffect(()=>{
    
  })


  return (
    <div styleName='history' style={{display: props.visible ? 'block' : 'none'}}>
      搜索历史
    </div>
  );
}

export default CSSModules(History,style);