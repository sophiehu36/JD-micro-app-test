<template>
	<div>
		子应用容器
		<button @click="changeData">发送数据</button>
		<micro-app
			name="page1"
			url="http://localhost:4001/micro-app/page1/"
			:data="data"
			@datachange="handleDataChange"
		>
			<!-- destory inline scopecss -->
		</micro-app>
	</div>
</template>

<script>
export default {
	name: "page1",
	data() {
		return {
			data: { from: "来自基座的初始化数据" },
		};
	},
	methods: {
		changeData() {
			this.data = { from: "来自基座的数据" + +new Date() };
		},
		handleDataChange(e) {
			console.log("通过生命周周期监听到来自子应用的数据", e);
			alert(JSON.stringify(e.detail.data));
		},
	},
};
</script>

<style lang="scss" scoped></style>
