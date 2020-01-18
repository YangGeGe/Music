import React,
{
// useRef,
// useEffect,
// useCallback,
// useReducer,
// useState,
} from 'react';
import CSSModules from 'react-css-modules';
// import PropTypes from 'prop-types';
import style from './MusicInfo.less';

function MusicInfo() {
  return (
    <div styleName="musicInfo">
      <img src="http://p2.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg?param=34y34" alt=""/>
      <div styleName="musicName">
        <p>世间美好与你环环相扣</p>
        <p>柏松</p>
      </div>
    </div>
  );
}

// MusicInfo.propTypes = {

// };

export default CSSModules(MusicInfo, style, { allowMultiple: true });
