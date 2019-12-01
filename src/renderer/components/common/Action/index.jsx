import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './index.less';

function Action(props) {
  const {
    title,
    children,
  } = props;
  return (
    <span title={ title }>
      {children}
    </span>
  );
}

Action.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Action.defaultProps = {
  title: '',
};

export default CSSModules(Action, styles);
