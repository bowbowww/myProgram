
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import "//at.alicdn.com/t/c/font_4520163_sh28beuv23.css"

// 导入网络请求的包
import { $http } from '@escook/request-miniprogram'

uni.@$http = $http

// 请求拦截器
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '数据加载中...'
	})
}

//  响应拦截器
$http.afterRequest = function(options) {
	uni.hideLoading()
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif