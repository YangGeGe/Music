/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from './index.less';

function Banner(props) {
  const [id, setId] = useState(1); // 图片的id
  useEffect(() => {
    // let imgId = id;
    // setInterval(() => {
    //   imgId += 1;
    //   // setId(id + 1);
    //   if (imgId > props.imgList[props.imgList.length - 1].id) {
    //     // setId(props.imgList[0].id);
    //     imgId = props.imgList[0].id;
    //   }
    //   setId(imgId);
    // }, 3000);
    // return () => { clearTimeout(); };
  }, [id]);
  // 圆点点击
  const btnClick = itemId => {
    setId(itemId);
  };
  return (
    <div styleName="banner">
      <div styleName="imgList">
        {
          props.imgList.map(item => (
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
          props.imgList.map(item => (
            <div
              key={ item.id }
              onClick={ () => { btnClick(item.id); } }
              styleName="imgBtn"
              style={ { 
                background: id === item.id ? 'rgba(236,77,106)' : 'white',
                color: id === item.id ? 'white' : 'black'
              } }
              title={item.music}
            >
              <div styleName='musicName'>{item.music}</div>
              <div 
                styleName='singer'
                style={ {
                  color: id === item.id ? 'white' : 'rgba(191,191,191)'
                } }
              >
                {item.singer}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

Banner.propTypes = {
  imgList: PropTypes.array.isRequired,
};
export default CSSModules(Banner, style);
