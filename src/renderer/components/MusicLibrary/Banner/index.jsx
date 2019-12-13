import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from './index.less';

function Banner(props) {
  const {
    imgList,
  } = props;
  const [id, setId] = useState(1); // 图片的id
  useEffect(() => {
    let imgId = id;
    setInterval(() => {
      imgId += 1;
      if (imgId > props.imgList[props.imgList.length - 1].id) {
        imgId = props.imgList[0].id;
      }
      setId(imgId);
    }, 3000);
    return clearTimeout();
  });
  // 圆点点击
  const btnClick = itemId => {
    setId(itemId);
  };
  // 左点击
  const leftBtnClick = () => {
    if (id === props.imgList[0].id) {
      setId(props.imgList[props.imgList.length - 1].id);
    } else {
      setId(id - 1);
    }
  };
  // 右点击
  const rightBtnClick = () => {
    if (id === props.imgList[props.imgList.length - 1].id) {
      setId(props.imgList[0].id);
    } else {
      setId(id + 1);
    }
  };
  return (
    <div styleName="banner">
      <div styleName="imgList">
        {
          imgList.map(item => (
            <img
              key={ item.id }
              src={ item.src }
              alt=""
              styleName="img"
              style={ { zIndex: id === item.id ? 1 : 0 } }
            />
          ))
        }
      </div>
      <div styleName="imgBtnList">
        {
          imgList.map(item => (
            <div
              key={ item.id }
              onClick={ () => { btnClick(item.id); } }
              styleName="imgBtn"
              style={ { background: id === item.id ? 'white' : 'none' } }
            />
          ))
        }
      </div>
      <div styleName="LRbutton">
        <span className="iconfont" styleName="leftBtn" onClick={ leftBtnClick }>{'\ue720'}</span>
        <span className="iconfont" styleName="rightBtn" onClick={ rightBtnClick }>{'\ue6f8'}</span>
      </div>
    </div>
  );
}

Banner.propTypes = {
  imgList: PropTypes.array.isRequired,
};

export default CSSModules(Banner, style);
