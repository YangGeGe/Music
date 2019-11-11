import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function History(props) {
  useEffect(() => {

  });
  
  return (
    <div styleName="history" style={ { display: props.visible ? 'block' : 'none' } }>
      {props.content}
    </div>
  );
}

export default CSSModules(History, style);
