<template>
	<div class="choose-user-content">
		<p class="question-p">你的身份是</p>
		<div class="img-div">
			<div @tap="setUser(1)">
				<image src="../../static/img/boy.jpg"></image>
				<p style="text-align: center;">老公</p>
			</div>
			<div @tap="setUser(2)">
				<image src="../../static/img/girl.jpg"></image>
				<p style="text-align: center;">老婆</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			setUser(id) {
				uni.setStorage({
				    key: 'user_id',
				    data: id,
				    success: () => {
				        uni.redirectTo({
				            url: '../index/index'
				        });
				    }
				});
			}
		}
	}
	
</script>

<style>
	.choose-user-content{
		width: 750rpx;
		height: 100vh;
		background: #afdfe4;
	}
	.img-div{
		display: flex;
		justify-content: space-around;
		padding:50rpx 50rpx;
	}
	.img-div image{
		width: 200rpx;
		height: 200rpx;
		display: inline-block;
		border-radius: 50%;
	}
	.question-p{
		text-align: center;
		padding-top: 150rpx;
	}
</style>
