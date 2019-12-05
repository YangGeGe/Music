import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './Action.less';

function Action(props) {
  const {
    title,
    children,
  } = props;
  return (
    <i
      title={ title }
      className="iconfont"
      styleName="action"
    >
      {children}
    </i>
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
