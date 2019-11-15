import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';
import HomePage from '../../components/home';
import Search from '../../components/common/Search';
import message from '../../components/common/Message';
import Banner from './Banner'

function MusicHome() {
  const [showHistory, setShowHistory] = useState(false);
  const [inputContent, setInputContent] = useState('');
  
  useEffect(()=>{
    
  })
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      message.loading('加载中...')
      setTimeout(function(){
        message.success('加载成功')
      },2000)
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
      <div styleName='contextTop'>
        <Banner styleName='banner'/>
        <div styleName='searchAndList'>
          <Search
            onKeyDown={onKeyDown}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            showHistory={showHistory}
            inputContent={inputContent}
          />
          <div styleName='rankingTitle'>热门排行版</div>
          <div styleName='contextLists'>
            <div styleName='contextList'>
              <img src='http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34' />
              <div>
                <span styleName='musicTitle'>后来</span>
                <span>刘若英</span>
              </div>
            </div>
            <div styleName='contextList'>
              <img src='http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34' />
              <div>
                <span styleName='musicTitle'>后来</span>
                <span>刘若英</span>
              </div>
            </div>
            <div styleName='contextList'>
              <img src='http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34' />
              <div>
                <span styleName='musicTitle'>后来</span>
                <span>刘若英</span>
              </div>
            </div>
            <div styleName='contextList'>
              <img src='http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34' />
              <div>
                <span styleName='musicTitle'>后来</span>
                <span>刘若英</span>
              </div>
            </div>
            <div styleName='contextList'>
              <img src='http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34' />
              <div>
                <span styleName='musicTitle'>后来</span>
                <span>刘若英</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSSModules(MusicHome,style);