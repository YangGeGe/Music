import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import { useSelector, connect } from 'react-redux';
import SiderBar from '../../components/MusicHomeComponents/SiderBar';
import Search from '../../components/common/search';
import message from '../../components/common/Message';
import Banner from './Banner';
import actions from '../../store/actions';
import Tabs from '../../components/common/Tabs';
import style from './index.less';


function MusicHome() {
  const [showHistory, setShowHistory] = useState(false);
  const [inputContent, setInputContent] = useState('');
  useEffect(() => {

  });
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      message.loading('加载中...');
      setTimeout(function () {
        message.success('加载成功');
      }, 2000);
    }
    // props.add();
  };
  const onChange = (e) => {
    setShowHistory(true);
    setInputContent(e.target.value);
  };
  const onFocus = () => {

  };
  const onBlur = () => {
    setShowHistory(false);
  };
  console.log(useSelector(state => state.num));
  return (
    <div styleName="app">
      <div styleName="sidemenu">
        <SiderBar/>
      </div>
      <div>
        <Tabs styleName="tabs"/>
      </div>
      <div styleName="infos">
        <div styleName="context">
          <div styleName="contextTop">
            <Banner styleName="banner"/>
            <div styleName="searchAndList">
              <Search
                onKeyDown={ onKeyDown }
                onChange={ onChange }
                onFocus={ onFocus }
                onBlur={ onBlur }
                showHistory={ showHistory }
                inputContent={ inputContent }
              />
              <div styleName="rankingTitle">热门排行版</div>
              <div styleName="contextLists">
                <div styleName="contextList">
                  <img src="http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34" alt=""/>
                  <div>
                    <span styleName="musicTitle">后来</span>
                    <span>刘若英</span>
                  </div>
                </div>
                <div styleName="contextList">
                  <img src="http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34" alt=""/>
                  <div>
                    <span styleName="musicTitle">后来</span>
                    <span>刘若英</span>
                  </div>
                </div>
                <div styleName="contextList">
                  <img src="http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34" alt=""/>
                  <div>
                    <span styleName="musicTitle">后来</span>
                    <span>刘若英</span>
                  </div>
                </div>
                <div styleName="contextList">
                  <img src="http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34" alt=""/>
                  <div>
                    <span styleName="musicTitle">后来</span>
                    <span>刘若英</span>
                  </div>
                </div>
                <div styleName="contextList">
                  <img src="http://p2.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=34y34" alt=""/>
                  <div>
                    <span styleName="musicTitle">后来</span>
                    <span>刘若英</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect((state) => ({
  ...state,
}), actions)(CSSModules(MusicHome, style));
