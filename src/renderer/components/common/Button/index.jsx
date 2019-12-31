import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './index.less';

function Button(props) {
  const { type, children, onClick } = props;
  return (
    <button
      styleName={ type }
      type="button"
      // onClick={ onClick }
    >
      <span>{ children }</span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  type: 'button',
  children: '',
  onClick: PropTypes.func,
};

export default CSSModules(Button, style);
