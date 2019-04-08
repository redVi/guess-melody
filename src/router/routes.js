const load = component => () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`);

export default [
  {
    path: '/',
    name: 'home',
    component: load('home'),
  },
  {
    path: '/artist',
    name: 'artist',
    component: load('artist'),
  },
  {
    path: '/genre',
    name: 'genre',
    component: load('genre'),
  },
  {
    path: '/result',
    name: 'result',
    component: load('result'),
  },
  {
    path: '*',
    component: load('error'),
  },
];
