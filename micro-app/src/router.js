import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/micro-home/",
	},
	{
		path: "/micro-home/*",
		name: "micro-home",
		component: () => import(/* webpackChunkName: "home" */ "./views/micro-home.vue"),
  },
  {
		path: "/page2/*",
		name: "page2",
		component: () => import(/* webpackChunkName: "home" */ "./views/page2.vue"),
	},
];

export default routes;
