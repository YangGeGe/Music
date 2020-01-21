import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './index.less';

function Search(props) {
  const { onKeyDown, onChange, onFocus, onBlur, showClose, value, clearValue } = props;
  const change = e => {
    onChange(e);
  };
  const onkeydown = e => {
    onKeyDown(e.target.value);
  };
  return (
    <div styleName="search">
      <input
        type="text"
        styleName="input"
        placeholder="搜索"
        onKeyDown={ e => onkeydown(e) }
        onChange={ e => change(e) }
        onFocus={ onFocus }
        onBlur={ onBlur }
        value={ value }
      />
      <span styleName="searchIcon" className="iconfont">&#xe741;</span>
      {showClose && <span styleName="searchClose" className="iconfont" onClick={ clearValue }>&#xe6e9;</span>}
    </div>
  );
}
Search.propTypes = {
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  showClose: PropTypes.bool,
  value: PropTypes.string,
  clearValue: PropTypes.func,
};
Search.defaultProps = {
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  showClose: PropTypes.bool,
  value: PropTypes.string,
  clearValue: PropTypes.func,
};

export default CSSModules(Search, style);
