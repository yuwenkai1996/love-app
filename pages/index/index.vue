<template>
	<div class="content">
		<p class="title">我们的小屋</p>
		<div class="menu-div">
			<div class="menu-item" @tap="getLoveLanguage">
				<div>
					<image src="../../static/img/1.png"></image>
				</div>
				<p>情话话</p>
			</div>
			<div class="menu-item" @tap="toImportantDay">
				<div>
					<image src="../../static/img/1.png"></image>
				</div>
				<p>纪念日</p>
			</div>
			<div class="menu-item" @tap="showDialog('程序员哥哥正在开发呦')">
				<div>
					<image src="../../static/img/1.png"></image>
				</div>
				<p>正在开发。。</p>
			</div>
			<div class="menu-item" @tap="showDialog('程序员哥哥正在开发呦')">
				<div>
					<image src="../../static/img/1.png"></image>
				</div>
				<p>正在开发。。</p>
			</div>
			<div class="menu-item" @tap="showDialog('程序员哥哥正在开发呦')">
				<div>
					<image src="../../static/img/1.png"></image>
				</div>
				<p>正在开发。。</p>
			</div>
			<div class="menu-item">

			</div>
		</div>
		<div class="dialog" v-show="dialogShow">
			<div class="dialog-content">
				<p style="padding: 20rpx;">{{dialogConent}}</p>
				<div class="dialog-quit" @tap="dialogShow=false">
					看到啦~
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment'
	export default {
		data() {
			return {
				menuArr:[

				],
				dialogShow:false,
				dialogConent:''
			}
		},
		onLoad() {
			console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
			this.dialogShow = true
			this.dialogConent = '媳妇我爱你呦~'
			uni.getStorage({
			    key: 'user_id',
			    success: (res) => {
			        this.$store.commit('setUserId', res.data)
					this.title = res.data
			    },
				fail: () => {
					this.title = 'get fail'
					uni.redirectTo({
					    url: '../choose-user/index'
					});
				}
			});
			
		},
		methods: {
			showDialog(content) {
				this.dialogConent = content
				this.dialogShow = true
			},
			getLoveLanguage() {
				let arr = ['你的情话我听着，你的余生我陪着。',
				'没有特别喜欢吃的零食，没有特别喜欢听的歌，却有个特别喜欢的你。',
				'比起天黑和鬼，我更怕你心酸和皱眉。',
				'希望我跟你的名字能写在一起，不管是在婚礼的喜帖上，还是在葬礼的墓碑上。',
				'不想去到永远那么远，只想呆在你附近这么近。',
				'很想和你拥有一个很长很长的未来，陪你走完这一生，彼此温暖，互不辜负。',
				'要是你在别人面前也这么可爱，我就不喜欢你了。',
				'不管你是烈酒还是毒茶，我都当作白水一口饮进，正如我印象里，你对我百利无害。',
				'我拿余生与你举案齐眉，请别让我皱眉，也别让我心如死灰。',
				'只要你愿意，当你失落失意的时候，最需要一个肩膀的时候，告诉我，我会立即出现。',
				'关于你，千军万马，四海潮生，你一笑，我心都甜了。',
				'春天会下雪，夏天有大雨，秋天会起风，冬天有艳阳，一年四季会有很多意外，但最迷人的，还是遇见了你。',
				'不是谁都可以在我心里兴风作浪，不是谁都可以让我念念不忘。',
				'对着同一个人不厌其烦真是难能可贵，偏偏你还能让我的日子变得很甜。',
				'你，是我光是想想都会偷着乐的人，甜不可言，乐不可支。',
				'其它星星都换了方位，北极星依然会在原地，当别人不了解你、不原谅你，甚至离开你，只要我守在原地，你就不会迷路。',
				'和你在一起的时候，被你抱着的时候，多想时间就此停住吧，像吃了跳跳糖一样甜的噼里啪啦真幸福啊。',
				'如果你感到辛苦，那就转过身到我怀里来躲一躲吧，就算我比你小，怀抱也不够大不够暖，但是我会用全身气力抱紧你，不会松开手的，对你会很温柔。',
				'每当感受到你的目光，整个脑袋都会被幸福填的满满的。']
				this.showDialog(arr[Math.floor(Math.random()*19)])
			},
			toImportantDay() {
				uni.navigateTo({
				    url: '../important-days/index'
				});
			}
		}
	}
</script>

<style>
	.content{
		width: 750rpx;
		height: 100vh;
		background: #afdfe4;
	}
	.title {
		font-size: 50rpx;
		color: #ea66a6;
		text-align: center;
		padding: 50rpx;
	}
	.menu-div{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.menu-item{
		width: 200rpx;
	}
	.menu-item image{
		width: 180rpx;
		height: 180rpx;
		padding: 10rpx;
	}
	.menu-item p{
		text-align: center;
		font-size: 36rpx;
	}
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
</style>
