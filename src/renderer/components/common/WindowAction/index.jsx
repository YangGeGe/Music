import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.less';
import Action from './Action';
import {
  ACTION_TEXT,
  ACTIONS,
} from '../constraint';

const electron = window.require('electron');
const { ipcRenderer } = electron;

function WindowActions() {
  const [windowSize, setWindowSize] = useState(false);

  const actionOperations = {
    close: () => {
      console.log(1);
    },
    transform: () => {
      ipcRenderer.send('window-max');
      setWindowSize(!windowSize);
    },
    minSmall: () => {
      console.log(3);
    },
  };
  const integration = (actions) => actions.map(action => ({
    type: action.type,
    title: action.key === ACTION_TEXT.transform
      ? (windowSize ? action.narrow.text : action.enlarge.text)
      : action.text,
    icon: action.key === ACTION_TEXT.transform
      ? (windowSize ? action.narrow.icon : action.enlarge.icon)
      : action.icon,
    key: action.key,
  }));

  const onAction = (action) => actionOperations[action.key];
  console.log(integration(ACTIONS.WIN));
  return (
    <div>
      {
        integration(ACTIONS.WIN).map(action => (
          <Action key={ action.key } title={ action.title } onAction={ onAction(action) }>
            {action.icon}
          </Action>
        ))
      }
    </div>
  );
}

export default CSSModules(WindowActions, styles);
