import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import History from './History.jsx';

function Search(props) {
  useEffect(()=>{
    
  })

  return (
    <div styleName="search">
      <input
        styleName="input"
        placeholder="搜索"
        onKeyDown={ props.onKeyDown }
        onChange={ props.onChange }
        onFocus={ props.onFocus }
        onBlur={ props.onBlur }
      />
      <span styleName="searchIcon" className="iconfont">&#xe741;</span>
      <History visible={props.showHistory} content={props.inputContent}/>
    </div>
  );
}

export default CSSModules(Search, style);
