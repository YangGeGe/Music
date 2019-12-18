import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.less';
import ActionList from './ActionList';


function ActionHook() {
  return (
    <div
      styleName="stripe"
    >
      <ActionList/>
      <div styleName="wrap">
        <div styleName="imgTop">
          <div styleName="imgItem">
            <img src={ `${require('../../../assets/imgs/zhongguojie.png')}` } alt="top"/>
          </div>
          <div styleName="imgCenter">
            <div styleName="imgItem">
              <img src={ `${require('../../../assets/imgs/zhongguojie (2).png')}` } alt="center"/>
            </div>
            <div styleName="imgBottom">
              <div styleName="imgItem">
                <img src={ `${require('../../../assets/imgs/zhongguojie (3).png')}` } alt="bottom"/>
              </div>
              <div styleName="imgItemLeft">
                <img src={ `${require('../../../assets/imgs/zhongguojie (5).png')}` } alt="right"/>
              </div>
              <div styleName="imgItemRight">
                <img src={ `${require('../../../assets/imgs/zhongguojie (4).png')}` } alt="left"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CSSModules(ActionHook, styles);
