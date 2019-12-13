/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function Footer() {
  useEffect(() => {

  });
  // 底部长度不能1000%
  return (
    <div styleName="footer">
      <div styleName="musicInfo">
        <img src="http://p2.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg?param=34y34"/>
        <dv styleName="musicName">
          <p>世间美好与你环环相扣</p>
          <p>柏松</p>
        </dv>
      </div>
      <div styleName="playInfo">
        <span styleName="lastSong" className="iconfont">&#xe800;</span>
        <span styleName="play" className="iconfont">&#xe630;</span>
        <span styleName="nextSong" className="iconfont">&#xe7ff;</span>
        <span styleName="progressbar"/>
        <span styleName="collection" className="iconfont">&#xe708;</span>
        <span className="iconfont">&#xe66c;</span>
        <span className="iconfont">&#xe732;</span>
        <span styleName="voicebar"/>
        <span>词</span>
        <span className="iconfont">&#xe714;</span>
      </div>
    </div>
  );
}

export default CSSModules(Footer, style);
