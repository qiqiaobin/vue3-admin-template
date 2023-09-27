export default {
  path: '/',
  name: '/',
  component: () => import('/@/layout/index.vue'),
  redirect: '/home',
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('/@/views/home/index.vue'),
      meta: {
        title: '首页',
        isLink: '',
        isHide: false,
        isIframe: false,
                  permissions:['/home'],
        icon: 'iconfont icon-shouye',
      },
    },
  ]
} as RouteItem;