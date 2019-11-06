import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function Footer(props) {
  useEffect(()=>{
    
  })

  return (
    <div styleName='footer'>
      <div styleName='musicInfo'>
        <span className='iconfont'>&#xe73b;</span>
      </div>
      <div styleName='playInfo'>
        <span styleName='collection' className='iconfont'>&#xe708;</span>
        <span styleName='lastSong' className='iconfont'>&#xe800;</span>
        <span styleName='play' className='iconfont'>&#xe630;</span>
        <span styleName='nextSong' className='iconfont'>&#xe7ff;</span>
      </div>
      <div styleName='otherInfo'>
        <span className='iconfont'>&#xe66c;</span>
        <span className='iconfont'>&#xe66d;</span>
        <span className='iconfont'>&#xe714;</span>
        <span className='iconfont'>&#xe732;</span>
      </div>
    </div>
  );
}

export default CSSModules(Footer,style);