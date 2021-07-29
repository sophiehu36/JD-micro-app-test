<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div>
       <router-link :to="{ name: 'micro-home' }">micro-home</router-link> |
       <router-link :to="{ name: 'page2' }">page2</router-link>
    </div>
		<router-view />
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
