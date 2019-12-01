import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.less';
import Action from '../Action';
import {
  WINDOW_ACTIONS,
  ACTION_MAP,
} from '../constraint';

function WindowActions() {
  const integration = (actions) => actions.map(action => ({
    type: action.type,
    title: ACTION_MAP[action.purpose],
    icon: ACTION_MAP[action.purpose],
  }));
  console.log(integration(WINDOW_ACTIONS));
  return (
    <div>
      {
        // integration(WINDOW_ACTIONS).map
        111222
      }
    </div>
  );
}

export default CSSModules(WindowActions, styles);
