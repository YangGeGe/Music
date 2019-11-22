import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import { useSelector, connect } from 'react-redux';
import SiderBar from '../../components/MusicHomeComponents/SiderBar';
import Search from '../../components/common/Search';
import message from '../../components/common/Message';
import Banner from './Banner/index';
import actions from '../../store/actions';
import style from './index.less';


function MusicHome() {
  const [showHistory, setShowHistory] = useState(false);
  const [inputContent, setInputContent] = useState('');
  useEffect(() => {

  });
  // 搜索框键盘落下
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      message.loading('加载中...');
      setTimeout(function () {
        message.success('加载成功');
      }, 2000);
    }
    // props.add();
  };
  // 搜索框内容发生改变
  const onChange = (e) => {
    setShowHistory(true);
    setInputContent(e.target.value);
  };
  // 搜索框获取焦点
  const onFocus = () => {

  };
  // 搜索框失去焦点
  const onBlur = () => {
    setShowHistory(false);
  };
  // banner图数组
  const imgList = [
    { src: 'http://p1.music.126.net/lWe5sGr3IJecg-l9d6IZVA==/109951164496424429.jpg?imageView&quality=89', id: 1 },
    { src: 'http://p1.music.126.net/sBY7Tv-6ny77Gdk8vI_3fQ==/109951164488075818.jpg?imageView&quality=89', id: 2 },
    { src: 'http://p1.music.126.net/RRQPuQJdLPV_MjMBI-oQZg==/109951164498682153.jpg?imageView&quality=89', id: 3 },
    { src: 'http://p1.music.126.net/PHOI2qH9bbbMOqQJommedA==/109951164498711947.jpg?imageView&quality=89', id: 4 },
  ];
  console.log(useSelector(state => state.num));
  return (
    <div styleName="app">
      <div styleName="sidemenu">
        <SiderBar/>
      </div>
      <div styleName="infos">
        <div styleName="context">
          <div styleName="contextTop">
            <Banner imgList={ imgList }/>
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
