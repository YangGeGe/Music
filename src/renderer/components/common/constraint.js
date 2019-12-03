
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

export const ACTION_TEXT = {
  close: 'close',
  transform: 'transform',
  minSmall: 'minSmall',
};

export const ACTIONS = {
  WIN: [
    {
      text: '关闭',
      icon: '\ue6e9',
      key: 'close',
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
      text: '最小化',
      icon: '\ue666',
      key: 'minSmall',
    },
  ],
};
