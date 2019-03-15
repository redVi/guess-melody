import Home from '@/views/home.vue';

const load = component => () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`);

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
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
    component: Home,
  },
];
