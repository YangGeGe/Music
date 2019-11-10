import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import History from './history.jsx';
import Message from '../method/message/index.jsx';

function Search(props) {
  const [showHistory, setShowHistory] = useState(false);
  const [InputContent, setInputContent] = useState('');
  useEffect(()=>{
    
  })

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // console.log(e.target.value)
      Message.success('haha')
    }
  };
  const onChange = (e) => {
    setShowHistory(true);
    setInputContent(e.target.value)
  };
  const onFocus = () => {
    
  };
  const onBlur = () => {
    setShowHistory(false);
  };


  return (
    <div styleName="search">
      <input
        styleName="input"
        placeholder="搜索"
        onKeyDown={ onKeyDown }
        onChange={ onChange }
        onFocus={ onFocus }
        onBlur={ onBlur }
      />
      <span styleName="searchIcon" className="iconfont">&#xe741;</span>
      <History visible={showHistory} content={InputContent}/>
    </div>
  );
}

export default CSSModules(Search, style);
