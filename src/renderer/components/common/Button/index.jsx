/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './index.less';

function Button(props) {
  useEffect(() => {

  });
  const { type, children, disabled } = props;
  return (
    <button
      styleName={ disabled ? 'disabled' : (type || 'button') }
    >
      <span>{children}</span>
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool,
};
export default CSSModules(Button, style);
