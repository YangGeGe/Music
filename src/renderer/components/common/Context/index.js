import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import HomePage from '../../home';
import Search from '../Search';

function Context(props) {
  useEffect(()=>{
    
  })

  return (
    <div styleName='context'>
      <div styleName='header'>
        <div styleName='banner'>banner</div>
        <div styleName='otherInfo'>
          
        </div>
      </div>
      <HomePage/>
    </div>
  );
}

export default CSSModules(Context,style);