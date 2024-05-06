<template>
	<view class="container">
		<view class="head">
			<navigator class="jump" url="/subpkg/signinInfo/signinInfo">
				<view class="left">
					<image src="/static/headPortrait.png" alt class="head-portrait" />
					<p class="name">c</p>
					<image src="/static/切换.png" alt class="change" />
				</view>
			</navigator>

			<view class="right">
				<image src="/static/扫码.png" alt class="saoma" />
			</view>
		</view>

		<navigator class="jump" url="/subpkg/guide/guide">
			<view class="recommand">
				<p class="description">功能推荐：</p>
				<p class="height-light">一键录入签到信息</p>
			</view>
		</navigator>

		<view class="function">
			<view class="{{isSignActive ? 'sign-active-class' : 'sign-list'}}" @click="showed1()">
				<image class="sign-list-img" src="../../static/项目云盘.png" mode=""></image>
				<p class="description">签到列表</p>
			</view>
			<view class="{{isNameActive ? 'name-active-class' : 'name-list'}}" @click="showed2()">
				<image class="name-list-img" src="../../static/人员名单.png" mode=""></image>
				<p class="description">签到名单</p>
			</view>
		</view>

		<scroll-view scroll-y="true" class="function-realization">
			<!-- 签到列表功能 -->
			<view class="sign-list-container" v-if="signShow">
				<view class="unit">
					<image src="../../static/签到.png" mode=""></image>
					<view class="text">
						<p class="title">标题</p>
						<p class="position">位置</p>
						<ul class="info">
							<li class="li1">我</li>
							<li class="li">total</li>
							<li class="li">distance</li>
							<li class="li2">time</li>
						</ul>
					</view>
				</view>
			</view>
			<!-- 签到名单功能 -->
			<view class="name-list-container" v-if="nameShow">
				<image src="../../static/添加active.png" mode="" class="add-img" @click="showAdd()"></image>
				<view class="text">
					<view class="left">
						<p class="description">共0份名单</p>
						<image src="@/static/提示.png" class="tip-img" mode=""></image>
					</view>
					<view class="right">
						<p class="description" @click="toManage()" v-if="isManage">管理</p>
						<view class="manage" v-else>
							<p class="description1" @click="toManage()">取消</p>
							<p class="description2">确定删除</p>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- 添加名单的弹窗显示 -->
		<view class="add-name-list" v-if="addShow">
			<view class="create-name-list" @click="createList">
				<p class="description">创建空白名单</p>
			</view>
			<view class="putIn">
				<p class="description">从签到记录导入</p>
			</view>
			<view class="exit" @click="closeAdd()">
				<p class="description">取消</p>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	
	let isSignActive = ref(false)
	let isNameActive = ref(false)
	let signShow = ref(false)
	let nameShow = ref(false)
	let addShow = ref(false)
	let isManage = ref(true)
	const showed1 = () => {
		isSignActive.value = true;
		isNameActive.value = false;
		signShow.value = true;
		nameShow.value = false;
	}
	const showed2 = () => {
		isSignActive.value = false;
		isNameActive.value = true;
		signShow.value = false;
		nameShow.value = true;
	}
	const showAdd = ()=>{
		addShow.value = true
	}
	const closeAdd = ()=>{
		addShow.value = false
	}
	const toManage = ()=> {
		isManage.value = !isManage.value
	}
	const createList = ()=> {
		uni.navigateTo({
			url:'/subpkg/createList/createList'
		})
	}
</script>

<style scoped lang="scss">
	@import './home.scss'
</style>