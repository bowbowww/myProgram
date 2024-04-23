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
			<view class="sign-list">
				<image class="sign-list-img" src="../../static/项目云盘.png" mode=""></image>
				<p class="description">签到列表</p>
			</view>
			<view class="name-list">
				<image class="name-list-img" src="../../static/项目云盘.png" mode=""></image>
				<p class="description">签到名单</p>
			</view>
		</view>
		
	</view>
</template>

<script setup>

</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		
// 头像部分
		.head {
			box-sizing: border-box;
			padding: 20rpx;
			padding-bottom: 0;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left:hover {
				cursor: pointer;
			}

			.left {
				width: 650rpx;
				height: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.head-portrait {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}

				.name {
					padding: 10rpx;
				}

				.change {
					width: 30rpx;
					height: 30rpx;
				}
			}

			.right {
				width: 60rpx;
				height: 60rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.saoma {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
		
// 功能推荐部分
		.jump:hover {
			cursor: pointer;
		}

		.recommand {
			width: 100%;
			height: 72rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 25rpx;
			
			.description {
				color: #888888;
			}
			.height-light {
				color: red;
			}
		}
		
// 功能列表
		.function {
			width: 100%;
			height: 76rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: yellow;
			
			.name-list {
				width: 50%;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				
				.name-list-img {
					width: 54rpx;
					height: 54rpx;
					padding-right: 30rpx;
				}
				
				.description {
					color: #888888;
					font-size: 27rpx;
				}
			}
			
			.sign-list {
				width: 50%;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				
				.sign-list-img {
					width: 54rpx;
					height: 54rpx;
					padding-right: 30rpx;
				}
				
				.description {
					color: #888888;
					font-size: 27rpx;
				}
			}
		}
	}
</style>