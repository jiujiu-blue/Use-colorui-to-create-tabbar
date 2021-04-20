<template>
	<view>
		<view class="cu-bar tabbar bg-white pos-bottom">
			<view class="action" @click="setTab(item)" v-for="(item,index) in tabbar" :key="index" :class="{'text-green':tabIndex == index,'text-gray add-action':item.center}">
				<view v-if="item.center">
					<button class="cu-btn cuIcon-add bg-orange shadow"></button>
				</view> 
				<view :class="item.icon" v-else></view> {{item.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				tabbar: [{
						icon: "cuIcon-homefill",
						text: "首页",
						page: "../index/index",
						center: false
					},
					{
						icon: "cuIcon-add",
						text: "发布",
						page: "../add/add",
						center: true
					},
					{
						icon: "cuIcon-myfill",
						text: "我的",
						page: "../user/user",
						center: false
					},
				],
			}
		},
		name: 'tabbar',
		computed: {

		},
		props: {
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		mounted() {
			this.index = this.tabIndex;
		},
		methods: {
			setTab(item) {
				uni.switchTab({
					url:item.page
				})
			}
		}
	}
</script>

<style>

</style>
