<template>
	<div id="app">
		<button @click="changeTheme">变更主题</button>
		主应用
		<div>
			<router-view />
		</div>
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
	methods: {
		changeTheme(){
			window.less.modifyVars({
			'@primary-color': 'red !important'
			})
			.then(() => {
			console.log('成功');
			})
			.catch((error) => {
			alert('失败');
			console.log(error);
			});
		}
	}
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
