import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './index.less';

function Button(props) {
  const { type, children } = props;
  return (
    <button
      styleName={type || 'button'}
    >
      <span>{children}</span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
};

export default CSSModules(Button, style);
