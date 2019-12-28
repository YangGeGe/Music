import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './index.less';
import ActionItem from './Action';

function ActionGroup({
  children,
  onClick,
}) {
  return (
    <div styleName="actionGroup">
      {
        children.map(action => (
          <span
            styleName="singleAction"
            key={ action.key }
            onClick={ () => onClick(action) }
          >
            {action}
          </span>
        ))
      }
    </div>
  );
}

ActionGroup.propTypes = {
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Action = {
  ActionItem,
  ActionGroup: CSSModules(ActionGroup, styles),
};

export default Action;
