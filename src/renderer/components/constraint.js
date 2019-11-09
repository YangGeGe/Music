// 一些映射
export const MODULAR_ITEM_MAP = {
  FIND_MUSIC: '发现音乐',
  FRINDS: '朋友',
  LOCAL_MUSIC: '本地音乐',
  DOWLOAD_MANAGE: '下载管理',
  MY_COLLECTION: '我的收藏',
};

const USER_MODULAR_ITEM = [
  'LOCAL_MUSIC',
  'DOWLOAD_MANAGE',
  'MY_COLLECTION',
];

const RECOMMEND_MODULAR_ITEM = [
  'FIND_MUSIC',
  'FRINDS',
];

export const Modular = [
  {
    title: '推荐',
    modular: USER_MODULAR_ITEM,
  },
  {
    title: '我的音乐',
    modular: RECOMMEND_MODULAR_ITEM,
  },
];
