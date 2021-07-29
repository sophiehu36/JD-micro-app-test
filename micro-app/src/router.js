import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/micro-page1/",
	},
	{
		path: "/micro-page1/*",
		name: "micro-page1",
		component: () =>
			import(/* webpackChunkName: "home" */ "./views/micro-page1.vue"),
	},
	{
		path: "/micro-page2/*",
		name: "micro-page2",
		component: () =>
			import(/* webpackChunkName: "home" */ "./views/micro-page2.vue"),
	},
];

export default routes;
