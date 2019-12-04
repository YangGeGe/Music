
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

export const ACTION_ICON = {
  WIN: [
    {
      icon: '\ue6e9',
      key: 'close',
    },
    {
      key: 'transform',
      enlarge: {
        icon: '\ue73b',
      },
      narrow: {
        icon: '\ue73a',
      },
    },
    {
      icon: '\ue666',
      key: 'minSmall',
    },
  ],
  MAC: [
    {
      icon: '\ue6e9',
      key: 'close',
    },
    {
      key: 'transform',
      enlarge: {
        icon: '\ue73b',
      },
      narrow: {
        icon: '\ue73a',
      },
    },
    {
      icon: '\ue666',
      key: 'minSmall',
    },
  ],
};

export const ACTION_TEXT = [
  {
    text: '关闭',
    key: 'close',
  },
  {
    key: 'transform',
    enlarge: {
      text: '放大',
    },
    narrow: {
      text: '缩小',
    },
  },
  {
    text: '最小化',
    key: 'minSmall',
  },
];
