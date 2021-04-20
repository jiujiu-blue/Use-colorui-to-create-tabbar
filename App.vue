<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//隐藏tabbar
			uni.hideTabBar();	
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("colorui/main.css");
	@import url("colorui/icon.css");
	@import url("colorui/animation.css");
	.pos-bottom{position: fixed !important;bottom: 0 !important;width: 100%;}
</style>
