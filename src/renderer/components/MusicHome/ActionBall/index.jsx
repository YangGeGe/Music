import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.less';
import ActionList from './ActionList';


function ActionBall() {
  const webWidth = document.body.clientWidth;
  const webHeight = document.body.clientHeight;
  const [click, setClickStatus] = useState(false);
  const [postion, setPosition] = useState({
    left: webWidth - 80,
    top: 250,
  });

  const drag = (e) => {
    const disx = e.pageX - postion.left;
    const disy = e.pageY - postion.top;
    document.onmousemove = (ev) => {
      const curLeft = ev.pageX - disx;
      const curTop = ev.pageY - disy;
      if (curLeft > webWidth - 80 || curLeft < 205) { // 伪类原因宽高不精确
        return;
      }
      if (curTop > webHeight - 140 || curTop < -20) {
        return;
      }
      setPosition({
        left: curLeft,
        top: curTop,
      });
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmousedown = null;
    };
  };

  const actionShow = () => {
    setClickStatus(true);
  };

  const actionDisabled = () => {
    setClickStatus(false);
  };

  return (
    <div
      styleName="drag"
      onMouseDown={ drag }
      onMouseLeave={ actionDisabled }
      style={ postion }
    >
      <div
        styleName="dragBall"
        onDoubleClick={ actionShow }
      >
        <div styleName="dragIcon">
          <div styleName="iconWrap">
            <span styleName={ `${click ? 'ballClickStatus' : ''}` }><i>icon</i></span>
          </div>
        </div>
      </div>
      <div
        styleName={ `ballAction ${click ? 'clickStatus' : ''}` }
      >
        <ActionList/>
      </div>
    </div>
  );
}


export default CSSModules(ActionBall, styles, { allowMultiple: true });
