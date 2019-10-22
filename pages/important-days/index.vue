<template>
	<div class="content">
		<div class="header">
			<span style="float: left;font-size: 30rpx;display: inline-block;padding-left:20rpx" @tap="quit">返回 </span>
			<p style="text-align: center;">{{title}}<span style="float: right;font-size: 30rpx;display: inline-block;padding-right:20rpx" @tap="showAdd=true" v-show="!showAdd">添加 </span></p>
			
		</div>
		<div class="main" v-if="!showAdd && !showEdit">
			<ul>
				<li >名称</li>
				<li >日期</li>
				<li >距今</li>
			</ul>
			<ul v-for="(item,index) of daysData" class="days-tr" :key="index" @longtap="changeEditItem(item)">
				<li><p  class="tr-name">{{item.name}}</p></li>
				<li>{{item.date}}</li>
				<li>{{item.diff}}</li>
			</ul>
		</div>
		<div v-if="showAdd || showEdit" class="content">
			<div style="padding: 30rpx;">
				<form>
					<view class="uni-form-item uni-column">
						<view class="title">名称</view>
						<view>
							<input v-model="form.name" type="text" class="input"/>
						</view>
					</view>
					<view class="uni-form-item uni-column">
						<view class="title">日期</view>
						<view>
							<picker mode="date" :value="form.date" @change="bindDateChange">
								<view class="uni-input">{{form.date}}</view>
							</picker>
						</view>
					</view>
				</form> 
				<div class="confirm-button" @tap="confirm" v-show="showAdd">确定</div>
				<div class="confirm-button" @tap="deleteMethod" v-show="showEdit">删除</div>
				<div class="confirm-button" @tap="edit" v-show="showEdit">确认修改</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { getImportantDays, addImportantDays, deleteImportantDays, updateImportantDays } from '../../api/api.js'
	import moment from 'moment'
	export default {
		data() {
			return {
				daysData: [],
				showAdd: false,
				showEdit: false,
				title: '纪念日',
				form: {
					id: '',
					name: '',
					date: moment().format('YYYY-MM-DD')
				}
			}
		},
		onLoad() {
			this.getNewData()
		},
		watch:{
			showAdd() {
				this.title = this.showAdd ? '增加纪念日' : '纪念日'
			}
		},
		methods: {
			getNewData() {
				getImportantDays().then(res => {
					res.data.data.map(x => {
						x.date = moment(x.date).format('YYYY-MM-DD')
						x.diff = moment().diff(x.date, 'days') + '天'
					})
					this.daysData = res.data.data
				})
			},
			quit() {
				if (this.showAdd) {
					this.showAdd = false
				} else if (this.showEdit) {
					this.showEdit = false
				} else {
					uni.navigateBack()
				}
			},
			confirm() {
				if (this.form.name) {
					addImportantDays(this.form).then(res => {
						this.getNewData()
						this.showAdd = false
						this.form = {
							id: '',
							name: '',
							date: moment().format('YYYY-MM-DD')
						}
					})
				}
			},
			bindDateChange(e) {
				this.form.date = moment(e.target.value).format('YYYY-MM-DD')
			},
			deleteMethod() {
				deleteImportantDays({ id: this.form.id }).then(res => {
					this.getNewData()
					this.showEdit = false
					this.form = {
						id: '',
						name: '',
						date: moment().format('YYYY-MM-DD')
					}
				})
			},
			edit() {
				updateImportantDays(this.form).then(res => {
					this.getNewData()
					this.showEdit = false
					this.form = {
						id: '',
						name: '',
						date: moment().format('YYYY-MM-DD')
					}
				})
			},
			changeEditItem(item) {
				this.editObj = item
				this.form = {
					id: this.editObj.id,
					name: this.editObj.name,
					date: this.editObj.date
				}
				this.showEdit = true
				this.title = this.showEdit ? '编辑纪念日' : '纪念日'
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100vh;
		background: rgb(255,210,203);
	}
	.header{
		padding-top: 50rpx;
		height: 80rpx;
		line-height: 80rpx;
		background:	#FFC0CB;
	}
	.days-div{
		width: 90%;
		margin: 0 auto;
	}
	.content-table{
		width: 100%;
		text-align: center;
	}
	tbody{
		font-size: 32rpx;
	}
	.tr-name{
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
	}
	.input{
		background: white;
		width: 500rpx;
		border-radius: 10rpx;
		border: 1px solid #808080;
	}
	.uni-form-item .title {
		padding: 20rpx 0;
	}
	.confirm-button{
		margin-top: 100rpx;
		width: 100%;
		text-align: center;
		background: #007AFF;
		color: white;
		height: 80rpx;
		font-size: 40rpx;
		line-height: 80rpx;
		border-radius: 20rpx;
	}
	.main ul{
		display: block;
		width: 100%;
	}
	.main li{
		float: left;
		list-style: none;
		text-align: center;
	}
	.main li:nth-child(1){
		width: 40%;
	}
	.main li:nth-child(2){
		width: 30%;
	}
	.main li:nth-child(3){
		width: 30%;
	}
	
</style>
