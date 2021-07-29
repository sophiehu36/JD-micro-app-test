import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/page1/'
  },
  {
    path: '/page1/*',
    name: 'page1',
    component: () => import(/* webpackChunkName: "page1" */ './views/page1.vue'),
  },
];

export default routes;
