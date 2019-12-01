import actions from '../../store/actions';

export const MESSAGE_ICON_TEXT_MAP = {
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning',
  loading: 'loading',
};

export const MESSAGE_ICON_MAP = {
  [MESSAGE_ICON_TEXT_MAP.success]: '\ue69e',
  [MESSAGE_ICON_TEXT_MAP.error]: '\ue644',
  [MESSAGE_ICON_TEXT_MAP.info]: '\ue685',
  [MESSAGE_ICON_TEXT_MAP.warning]: '\ue685',
  [MESSAGE_ICON_TEXT_MAP.loading]: '\ue60e',
};

export const WINDOW_ACTIONS = [
  {
    purpose: 'close',
    type: 'action',
  },
  {
    purpose: 'transform',
    type: 'action',
  },
  {
    purpose: 'minSmall',
    type: 'action',
  },
];

export const ACTION_MAP = {
  close: {
    text: '关闭',
    icon: '\ue6e9',
  },
  //  TODO: 图标
  transform: {
    enlarge: {
      text: '放大',
      icon: '\ue73b',
    },
    narrow: {
      text: '缩小',
      icon: '\ue73a',
    },
  },
  minSmall: {
    text: '最小化',
    icon: '\ue666',
  },
};
