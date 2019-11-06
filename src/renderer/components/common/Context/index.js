import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import HomePage from '../../home';

function Context(props) {
  useEffect(()=>{
    
  })

  return (
    <div styleName='context'>
      <HomePage/>
      <HomePage/>
      <HomePage/>
      <HomePage/>
      <HomePage/>
    </div>
  );
}

export default CSSModules(Context,style);