import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import { useSelector, connect } from 'react-redux';
import SiderBar from '../../components/MusicHomeComponents/SiderBar';
// import message from '../../components/common/Message';
import Button from '../../components/common/Button';
import Banner from './Banner';
import WindowAction from '../../components/common/WindowAction';
import Footer from '../../components/common/Footer';
import actions from '../../store/actions';
import Tabs from '../../components/common/Tabs';
import style from './index.less';
import {
  getPlatform,
} from '../../utils';


function MusicHome() {
  const isWin = getPlatform() === 'WIN';
  const [showHistory, setShowHistory] = useState(false);
  const [inputContent, setInputContent] = useState('');
  useEffect(() => {

  });
  // 搜索框键盘落下
  // const onKeyDown = (e) => {
  //   if (e.keyCode === 13) {
  //     message.loading('加载中...');
  //     setTimeout(function () {
  //       message.success('加载成功');
  //     }, 2000);
  //   }
  //   props.add();
  // };
  // 搜索框内容发生改变
  // const onChange = (e) => {
  //   setShowHistory(true);
  //   setInputContent(e.target.value);
  // };
  // 搜索框获取焦点
  // const onFocus = () => {

  // };
  // 搜索框失去焦点
  // const onBlur = () => {
  //   setShowHistory(false);
  // };
  // banner图数组
  const imgList = [
    {
      src: 'http://p1.music.126.net/lWe5sGr3IJecg-l9d6IZVA==/109951164496424429.jpg?imageView&quality=89',
      id: 1,
      music: 'Love poem',
      singer: 'IU',
    },
    {
      src: 'http://p1.music.126.net/a3qkh5MtI7u2j8-vmPfxyA==/109951164509400719.jpg?imageView&quality=89',
      id: 2,
      music: 'Frozen 2 (Mandarin Original Motion Picture Soundtrack)',
      singer: 'Various Artists',
    },
    {
      src: 'http://p1.music.126.net/6D1KIsi1ZfCkj1Iq85l1Vw==/109951164509380880.jpg?imageView&quality=89',
      id: 3,
      music: '捞月摇',
      singer: '不才',
    },
    {
      src: 'http://p1.music.126.net/64wqw0V8lYY4KGTsxjaYOA==/109951164509387752.jpg?imageView&quality=89',
      id: 4,
      music: '爱你不是两三天',
      singer: '焦迈奇',
    },
  ];
  console.log(useSelector(state => state.num));
  return (
    <div styleName="app">
      <div styleName="sidemenu">
        <SiderBar/>
      </div>
      {
        isWin ? <WindowAction/> : ''
      }
      <div styleName="infos">
        <div styleName="context">
          <div styleName="contextLeft">
            <div styleName="leftTitle">
              <p>HotDaily new song</p>
              <span className="iconfont" styleName="more">{'\ue6f8'}</span>
            </div>
            <Banner imgList={ imgList }/>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <div styleName="leftTitle">
              <p>AlbumsPop music</p>
              <div>
                <span className="iconfont" styleName="more">{'\ue720'}</span>
                <span className="iconfont" styleName="more">{'\ue6f8'}</span>
              </div>
            </div>
          </div>
          <div styleName="contextRight">
            <div styleName="leftTitle">
              <p>Exclusive</p>
              <span className="iconfont" styleName="more">{'\ue6f8'}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default connect((state) => ({
  ...state,
}), actions)(CSSModules(MusicHome, style));
