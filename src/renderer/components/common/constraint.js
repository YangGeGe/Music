
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

export const ACTION_TEXT_KEY = {
  close: 'close',
  transform: 'transform',
  minSmall: 'minSmall',
};

export const ACTION_MAP = [
  {
    text: '最小化',
    icon: '\ue666',
    key: 'minSmall',
  },
  {
    key: 'transform',
    enlarge: {
      text: '放大',
      icon: '\ue73b',
    },
    narrow: {
      text: '缩小',
      icon: '\ue73a',
    },
  },
  {
    text: '关闭',
    key: 'close',
    icon: '\ue6e9',
  },
];
