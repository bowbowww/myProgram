<template>
	<view class="container">
		<view class="list-name">
			<p class="description">名单标题: </p>
			<input class="title-input" type="text" placeholder="请输入名单标题..."/>
		</view>
		<view class="list-info">
			<p class="description">成员信息: </p>
			<checkbox-group class="choose-info" bindchange="checkboxChange">
				<label  class="checkbox-item">
					 <checkbox value="item1" checked="true" disabled="true" color="#adadb0">姓名</checkbox>
				</label>
				<label  class="checkbox-item">
					 <checkbox value="item2">学号</checkbox>
				</label>
				<label  class="checkbox-item">
					 <checkbox value="item3">班级</checkbox>
				</label>
				<label  class="checkbox-item">
					 <checkbox value="item4">工号</checkbox>
				</label>
				<label  class="checkbox-item">
					 <checkbox value="item5">手机</checkbox>
				</label>
				<view class="add-info">
					<image class="add-img" src="../../static/添加active.png" mode=""></image>
					<p class="description1">添加其他信息</p>
				</view>
			</checkbox-group>
		</view>
		<view class="create-bn">
			<button class="bn">立即创建</button>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped>
@import "./createList.css";
</style>
