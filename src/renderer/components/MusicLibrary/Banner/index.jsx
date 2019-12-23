/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from './index.less';
import Button from '../../common/Button';

function Banner(props) {
  const { imgList } = props;
  const [btnIndex, setIndex] = useState(1); // button的index
  useEffect(() => {
    test1;
    // return clearTimeout(test1);
  });

  const test1 = setTimeout(() => {
    let imgIndex = btnIndex;
    imgIndex += 1;
    if (imgIndex > props.imgList.length) {
      imgIndex = 1;
    }
    setIndex(imgIndex);
  }, 5000);

  // 圆点点击
  const btnClick = index => {
    setIndex(index);
    clearTimeout(test1);
  };
  const onclick = () => {
    console.log(1);
  };
  // 左点击
  // const leftBtnClick = () => {
  //   if (id === props.imgList[0].id) {
  //     setId(props.imgList[props.imgList.length - 1].id);
  //   } else {
  //     setId(id - 1);
  //   }
  // };
  // // 右点击
  // const rightBtnClick = () => {
  //   if (id === props.imgList[props.imgList.length - 1].id) {
  //     setId(props.imgList[0].id);
  //   } else {
  //     setId(id + 1);
  //   }
  // };
  return (
    <div styleName="banner">
      <div styleName="imgList">
        {
          imgList.map((item, index) => (
            <img
              key={ item.src }
              src={ item.src }
              alt=""
              styleName="img"
              style={ { zIndex: index + 1 === btnIndex ? 1 : 0 } }
            />
          ))
        }
      </div>
      <div styleName="imgBtnList">
        {
          imgList.map((item, index) => (
            <div
              key={ index }
              // onClick={ () => { btnClick(index + 1); } }
              onMouseOver={ () => { btnClick(index + 1); } }
              onFocus={ () => { btnClick(index + 1); } }
              styleName="imgBtn"
              style={ { background: index + 1 === btnIndex ? 'white' : 'none' } }
            />
          ))
        }
      </div>
      {/* <div styleName="LRbutton">
        <span className="iconfont" styleName="leftBtn" onClick={ leftBtnClick }>{'\ue720'}</span>
        <span className="iconfont" styleName="rightBtn" onClick={ rightBtnClick }>{'\ue6f8'}</span>
      </div> */}
      <Button onClick={ onclick }>点我</Button>
    </div>
  );
}

Banner.propTypes = {
  imgList: PropTypes.array.isRequired,
};

export default CSSModules(Banner, style);
