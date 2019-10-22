<template>
	<view>
		<div class="dialog" v-show="dialogShow">
			<div class="dialog-content">
				<div class="close-icon" @click="cancleMethods">
					<icon type="clear" size="30"></icon>
				</div>
				<p style="padding: 20rpx;">{{context}}</p>
				<div class="dialog-quit" @tap="confirmMethods">
					{{confirm}}
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	
	export default {
		props: {
			context: {
				type: String,
				default: ''
			},
			confirm: {
				type: String,
				default: '确定'
			}
		},
		data() {
			return {
				dialogShow: false
			};
		},
		methods: {
			confirmMethods() {
				this.dialogShow = false
				this.$emit('confirm', true)
			},
			cancleMethods() {
				console.log(312)
				this.dialogShow = false
				this.$emit('cancle', false)
			},
			changeShow(x) {
				this.dialogShow = x
			}
		}
	}
</script>

<style scoped>
.dialog{
	position: absolute;
	top: 0;
	background: rgba(0,0,0,0.5);
	width: 750rpx;
	height: 100vh;
}
.dialog-content{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
	width: 700rpx;
	background: white;
	border-radius: 20rpx;
}
.dialog-quit{
	border-top: 1rpx solid gray;
	text-align: center;
	padding: 20rpx 10rpx;
}
.close-icon{
	position: absolute;
	right: -20rpx;
	top: -30rpx;
	z-index: 100;
}
</style>
