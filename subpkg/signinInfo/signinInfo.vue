<template>
	<view class="container">
<!-- 顶部提示 -->
		<view class="tip">
			<p class="description">【签到信息】可以作为签到信息使用，完善签到信息将方便下次签到。</p>
		</view>
<!-- 头像部分 -->
		<view class="change-portrait">
			<image class="head-portrait" src="../../static/headPortrait.png" mode=""></image>
			<p class="description">[点击编辑]</p>
		</view>
<!-- 信息部分 -->
		<view class="info-content">
			<view class="unit">
				<p class="info-name">用户ID</p>
				<input class="info" type="text" disabled/>
				<view class="user-id">
					<p>[查看]</p>
				</view>
			</view>
			<view class="unit">
				<p class="info-name">昵称</p>
				<input class="info" type="text" />
			</view>
			<view class="unit">
				<p class="info-name">姓名</p>
				<input class="info" type="text" />
			</view>
			<view class="unit">
				<p class="info-name">学号</p>
				<input class="info" type="text" />
			</view>
		</view>
		
<!-- 添加部分 -->
		<view class="add-info">
			<image class="add-img" src="../../static/添加active.png" mode=""></image>
			<view class="description"><p>添加其他信息</p></view>
		</view>
		
<!-- 保存部分 -->
		<view class="save-container">
			<button class="save-button">保存</button>
		</view>
		
	</view>
</template>

<script>

</script>

<style scoped lang="scss">
	@import './signinInfo.scss'
</style>