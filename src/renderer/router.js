import MusicHome from './pages/MusicHome';

const router = [
  {
    path: '/',
    componentName: MusicHome,
    key: 'MucicHome',
    exact: true,
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
