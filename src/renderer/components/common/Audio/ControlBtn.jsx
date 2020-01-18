import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './ControlBtn.less';

function ControlBtn({
  paused,
  onControl,
}) {
  return (
    <div styleName="btnWrap">
      <span styleName="lastSong" className="iconfont">&#xe800;</span>
      <div styleName="playStatus">
        <ul
          styleName={ `iconList ${!paused ? 'playIcon' : ''}` }
          onClick={ () => onControl() }
          role="button"
        >
          <li styleName="iconWrap">
            <i className="iconfont">&#xe653;</i>
          </li>
          <li styleName="iconWrap play">
            <i className="iconfont">&#xe72e;</i>
          </li>
        </ul>
      </div>
      <span styleName="nextSong" className="iconfont">&#xe7ff;</span>
    </div>
  );
}

ControlBtn.propTypes = {
  paused: PropTypes.bool.isRequired,
  onControl: PropTypes.func.isRequired,
};

export default CSSModules(ControlBtn, style, { allowMultiple: true });
