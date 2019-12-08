import { lazy } from 'react';

const MusicHome = lazy(() => import('./pages/MusicHome'));
const MusicLibrary = lazy(() => import('./pages/MusicLibrary'));

const router = [
  {
    path: '/musicHome',
    componentName: MusicHome,
    key: 'MucicHome',
    routes: [
      {
        path: '/musicHome/musicLibrary',
        componentName: MusicLibrary,
        key: 'MusicLibrary',
        indexRouter: true, // 默认路由
      },
    ],
  },
  /*
   * 动态路由
   * {
   *   path: '/xxxx/:xx',
   *   componentName: xxx,
   * },
   */
  /*
   * 嵌套路由
   * {
   *   path: '/xx',
   *   componentName: xx,
   *   routes: [
   *     {
   *       path: '/xx/yy',
   *       componentName: yy,
   *     },
   *     {
   *       path: '/user/cc',
   *       componentName: cc,
   *     },
   *   ],
   * },
   */
];

export default router;
