import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './Action.less';
import {
  getPlatform,
} from '../../../utils';

function Action(props) {
  const {
    title,
    children,
    onAction,
  } = props;
  return (
    <span
      title={ title }
      styleName={ `${getPlatform()}WindowAction` }
      className="iconfont"
      onClick={ onAction }
    >
      {children}
    </span>
  );
}

Action.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};

Action.defaultProps = {
  title: '',
};

export default CSSModules(Action, styles);
