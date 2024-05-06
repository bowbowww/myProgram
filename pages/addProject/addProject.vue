<template>
	<view class="container">
		<!-- 上半部分 -->
		<view class="top">
			<input class="sign-name" type="text" placeholder="请输入签到名字..." />
			<textarea class="sign-content" name="" id="" cols="40" rows="5" placeholder="请输入签到公告..."></textarea>

			<view class="time-container">
				<image class="time-img" src="../static/时间.png"></image>
				<view class="time">
					<picker mode="date" value="{{currentDate}}" start="2024-01-01" end="2025-01-01" @change="bindDateChange">
						<view class="picker">
							{{startDate}}
						</view>
					</picker>
					<picker mode="time" value="{{startTime}}" start="00:00" end="23:59" @change="bindTimeChange">
						<view class="picker">
							{{startTime}}
						</view>
					</picker>
					<p class="minus">-</p>
					<picker mode="date" value="{{currentDate}}" start="2024-01-01" end="2025-01-01" @change="bindDateChange2">
						<view class="picker">
							{{endDate}}
						</view>
					</picker>
					<picker mode="time" value="{{endTime}}" start="00:00" end="23:59" @change="bindTimeChange2">
						<view class="picker">
							{{endTime}}
						</view>
					</picker>
				</view>
			</view>

			<view class="signin-count">
				<p class="description">签到次数</p>
				<radio-group class="select-count">
					<label class="radio-list__item">
						<radio value="选项1" checked="true">仅一次</radio>
					</label>
					<label class="radio-list__item">
						<radio value="选项2">每天一次</radio>
					</label>
					<label class="radio-list__item">
						<radio value="选项2">无限制</radio>
					</label>
				</radio-group>
			</view>
		</view>

		<!-- 下半部分 -->
		<view class="bottom">
			<view class="unit">
				<p class="description">可签到范围</p>
				<view class="content-select">
					<p class="content">{{selectedItem}}</p>
					<picker mode="selector" value="{{index}}" :range="array" @change="bindSelector">
						<view class="picker">
							<image src="../../static/右三角.png" mode="" style="width: 50rpx; height: 50rpx;"></image>
						</view>
					</picker>
				</view>
			</view>
			<view class="unit">
				<p class="description">签到位置</p>
				<view class="content-select">
					
				</view>
			</view>
			<view class="unit">
				<p class="description">签到信息</p>
				<view class="content-select" @click="mapChooseLocation">
						<p class="position">11</p>
					<view class="picker">
						<image src="../../static/右三角.png" mode="" style="width: 50rpx; height: 50rpx;"></image>
					</view>
				</view>
			</view>
			
			
		</view>

	</view>
</template>
<script setup>
	import {
		ref
	} from 'vue'

	const today = new Date();
	const year = today.getFullYear();
	const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的，加1并格式化为两位数
	const day = today.getDate().toString().padStart(2, '0');
	const currentDate = `${year}-${month}-${day}`
	const array = ref(['一百米', '两百米', '四百米'])

	let one = ref(['0'])
	let index = ref(0)
	let startDate = ref('开始日期')
	let startTime = ref('时间')
	let endDate = ref('结束日期')
	let endTime = ref('时间')
	let selectedItem = ref('请选择可签到范围米数')




	const bindDateChange = (e) => {
		startDate.value = e.detail.value
	}
	const bindTimeChange = (e) => {
		startTime.value = e.detail.value
	}
	const bindDateChange2 = (e) => {
		endDate.value = e.detail.value
	}
	const bindTimeChange2 = (e) => {
		endTime.value = e.detail.value
	}
	const bindSelector = (e) => {
		index.value = e.detail.value
		selectedItem.value = array.value[index.value]
	}

	// 地图定位选点
	const mapChooseLocation = () => {
		const key = 'UAMBZ-AL3C3-XHZ3E-OOFQZ-GM7ZE-P5B2B'; //使用在腾讯位置服务申请的key
		const referer = '位置签到系统'; //调用插件的app的名称
		const location = JSON.stringify({
			latitude: 39.89631551,
			longitude: 116.323459711
		});
		const category = '生活服务,娱乐休闲';
		uni.navigateTo({
			url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location +
				'&category=' + category
		})
	}
	const mapChooseRegion = ref('')
	const mapChooseDetail = ref('')
	const chooseLocation = requirePlugin('chooseLocation');
	console.log(chooseLocation)
	// onShow() {
	// 		const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
	// 		console.log(location, 'location') //打印结果图在下面
	// 		if (location) {
	// 			mapChooseRegion.value = location.name
	// 			mapChooseDetail.value = location.address
	// 		}
	// 	},
	// 	onUnload() {
	// 		// 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
	// 		chooseLocation.setLocation(null);
	// 	}
</script>

<style scoped lang="scss">
	@import './addProject.scss'
</style>