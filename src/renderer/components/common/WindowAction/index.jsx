import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.less';
import Action from './Action';
import {
  ACTION_TEXT_KEY,
  ACTION_TEXT,
  ACTION_ICON,
} from '../constraint';
import {
  getPlatform,
} from '../../../utils';

const electron = window.require('electron');
const { ipcRenderer } = electron;

function WindowActions() {
  const [windowSize, setWindowSize] = useState(false);

  const actionOperations = {
    close: () => {
      ipcRenderer.send('close');
    },
    transform: () => {
      ipcRenderer.send('window-max');
      setWindowSize(!windowSize);
    },
    minSmall: () => {
      ipcRenderer.send('window-min');
    },
  };
  const integration = (actions) => {
    const acionList = [];
    actions.forEach(action => {
      ACTION_ICON[getPlatform()].forEach(iconItem => {
        if (action.key === iconItem.key) {
          acionList.push({
            title: action.key === ACTION_TEXT_KEY.transform
              ? (windowSize ? action.narrow.text : action.enlarge.text)
              : action.text,
            icon: action.key === ACTION_TEXT_KEY.transform
              ? (windowSize ? iconItem.narrow.icon : iconItem.enlarge.icon)
              : iconItem.icon,
            key: action.key,
          });
        }
      });
    });
    return acionList;
  };

  const onAction = (action) => actionOperations[action.key];

  return (
    <div>
      {
        integration(ACTION_TEXT).map(action => (
          <Action
            key={ action.key }
            title={ action.title }
            onAction={ onAction(action) }
          >
            {action.icon}
          </Action>
        ))
      }
    </div>
  );
}

export default CSSModules(WindowActions, styles);
