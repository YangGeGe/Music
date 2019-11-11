import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import HomePage from '../../components/home';
import Search from '../../components/common/Search';
import message from '../../components/common/Message';

function MusicHome() {
  const [showHistory, setShowHistory] = useState(false);
  const [inputContent, setInputContent] = useState('');
  
  useEffect(()=>{
    
  })
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // message.info('我是message中的额长度测试哟')
      message.success('成功')
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
    <div styleName='context'>
      <div styleName='banner'>
        banner
      </div>
      <div styleName='searchAndList'>
        <Search
          onKeyDown={onKeyDown}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          showHistory={showHistory}
          inputContent={inputContent}
        />
        <HomePage/>
      </div>
    </div>
  );
}

export default CSSModules(MusicHome,style);