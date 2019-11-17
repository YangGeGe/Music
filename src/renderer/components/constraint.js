// 一些映射
export const MODULAR_ITEM_MAP = {
  FIND_MUSIC: { name: '发现音乐', icon: '\ue602' },
  PRIVTE: { name: '私人FM', icon: '\ue62b' },
  FRINDS: { name: '朋友', icon: '\ue615' },
  LOCAL_MUSIC: { name: '下载管理', icon: '\ue723' },
  DOWLOAD_MANAGE: { name: '我的音乐云盘', icon: '\ue621' },
  MY_COLLECTION: { name: '我的收藏', icon: '\ue859' },
};

const USER_MODULAR_ITEM = [
  MODULAR_ITEM_MAP.LOCAL_MUSIC,
  MODULAR_ITEM_MAP.DOWLOAD_MANAGE,
  MODULAR_ITEM_MAP.MY_COLLECTION,
];

const RECOMMEND_MODULAR_ITEM = [
  MODULAR_ITEM_MAP.FIND_MUSIC,
  MODULAR_ITEM_MAP.FRINDS,
  MODULAR_ITEM_MAP.PRIVTE,
];

export const Modular = [
  {
    title: '',
    key: 'recommend',
    modular: RECOMMEND_MODULAR_ITEM,
  },
  {
    title: '我的音乐',
    key: 'my-music',
    modular: USER_MODULAR_ITEM,
  },
];
