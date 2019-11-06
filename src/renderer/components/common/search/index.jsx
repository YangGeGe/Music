import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import History from './history.jsx';

function Search(props) {
  const [showHistory, setShowHistory] = useState(false);
  useEffect(()=>{
    
  })

  const onKeyDown = (e) => {
    if(e.keyCode == 13){
      console.log(e.target.value)
    }
  }
  const onChange = (e) => {
    console.log(e.target.value)
  }
  const onFocus = () => {
    setShowHistory(true)
  }
  const onBlur = () => {
    setShowHistory(false)
  }


  return (
    <div styleName='search'>
      <input
        styleName='input'
        placeholder="搜索"
        onKeyDown={ onKeyDown }
        onChange={ onChange }
        onFocus={ onFocus }
        onBlur={ onBlur }
      />
      <span styleName="searchIcon" className='iconfont'>&#xe741;</span>
      {/*<span styleName="clearIcon" className='iconfont'>&#xe6e9;</span>*/}
      <History visible={showHistory}/>
    </div>
  );
}

export default CSSModules(Search,style);
