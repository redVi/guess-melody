import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';

const load = component => () => import(`./views/${component}.vue`);

Vue.use(Router);

const routes = [
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

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});
