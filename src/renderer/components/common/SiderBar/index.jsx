import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import style from './index.less';

function SiderBar() {
  const [showList, setShowList] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {

  });
  const shrinkOrShow = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      setShowList(true);
    } else {
      setShowList(false);
    }
  };

  return (
    <div styleName="siderBar">
      <div styleName="user">
        <img src="http://img1.imgtn.bdimg.com/it/u=3636610533,1617274814&fm=26&gp=0.jpg" alt=""/>
        <div styleName="userInfo">
          <span styleName="userName" title="派大星">派大星</span>
          <span title="我是海绵宝宝的朋友">我是海绵宝宝的朋友</span>
        </div>
      </div>
      <div styleName="oneList">
        <div> <span className="iconfont">&#xe602;</span> 发现音乐</div>
        <div> <span className="iconfont">&#xe62b;</span> 私人FM</div>
        <div> <span className="iconfont">&#xe615;</span> 朋友</div>
      </div>
      <div styleName="oterList">
        <div styleName="listTitle" onClick={ shrinkOrShow }>
          {showList ? <span className="iconfont">&#xe68d;</span> : <span className="iconfont">&#xe68f;</span>} 我的音乐
        </div>
        {showList && (
        <div styleName="secondLists">
          <div> <span className="iconfont">&#xe723;</span> 下载管理</div>
          <div> <span className="iconfont">&#xe621;</span> 我的音乐云盘</div>
          <div> <span className="iconfont">&#xe859;</span> 我的收藏</div>
        </div>
        )}
      </div>
    </div>
  );
}

export default CSSModules(SiderBar, style);
