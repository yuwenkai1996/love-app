<template>
	<div class="content">
		<div class="header">
			<span style="float: left;font-size: 30rpx;display: inline-block;padding-left:20rpx" @tap="quit">返回 </span>
			<p style="text-align: center;">纪念日</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				daysData: []
			}
		},
		onLoad() {
			uni.request({
			    url: 'http://122.51.3.117:3000/users/getImportantDays', //仅为示例，并非真实接口地址。
				method: 'GET',
			    success: (res) => {
			        this.daysData = res.data.data
			    }
			});
		},
		methods: {
			quit() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.content{
		width: 750rpx;
		height: 100vh;
		background: rgb(255,210,203);
	}
	.header{
		height: 80rpx;
		line-height: 80rpx;
		background:	#FFC0CB;
	}
</style>
