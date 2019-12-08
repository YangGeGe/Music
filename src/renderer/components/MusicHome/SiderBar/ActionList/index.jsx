import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.less';
import Action from '../../../common/Action';
import {
  ACTION_MAP,
  ACTION_TEXT_KEY,
} from '../../../common/constraint';

const electron = window.require('electron');
const { ipcRenderer } = electron;

const {
  ActionItem,
  ActionGroup,
} = Action;

function ActionList() {
  const [windowSize, setWindowSize] = useState(false);

  const integration = (actions) => actions.map(action => ({
    title: action.key === ACTION_TEXT_KEY.transform
      ? (windowSize ? action.narrow.text : action.enlarge.text)
      : action.text,
    icon: action.key === ACTION_TEXT_KEY.transform
      ? (windowSize ? action.narrow.icon : action.enlarge.icon)
      : action.icon,
    key: action.key,
  }));

  const actionOperation = ({ key }) => {
    switch (key) {
      case ACTION_TEXT_KEY.close:
        ipcRenderer.send('close');
        break;
      case ACTION_TEXT_KEY.transform:
        ipcRenderer.send('window-max');
        setWindowSize(!windowSize);
        break;
      case ACTION_TEXT_KEY.minSmall:
        ipcRenderer.send('window-min');
        break;
      default:
        ipcRenderer.send('close');
    }
  };

  return (
    <>
      <ActionGroup
        onClick={ actionOperation }
      >
        {
          integration(ACTION_MAP).map(action => (
            <ActionItem
              key={ action.key }
              title={ action.title }
            >
              {action.icon}
            </ActionItem>
          ))
        }
      </ActionGroup>
    </>
  );
}

export default CSSModules(ActionList, styles);
