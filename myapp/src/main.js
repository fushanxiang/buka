// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Home from './components/HelloFromVux'
import Hello from './components/Hello'
import Fenlei from './components/Fenlei'
import Infolist from './components/Infolist'
import Buhui from './components/Buhui'
import Zhoubian from './components/Zhoubian'
import Rban from './components/Rban'
import Wan from './components/Wan'
import Gao from './components/Gao'
import Xeng from './components/Xeng'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path:'/hello',
		name:'Hello',
		component:Hello
	},
	{
		path:'/fenlei',
		name:'Fenlei',
		component:Fenlei
	},
	{
		path:'/Infolist/:id',
		name:'Infolist',
		component:Infolist
	},
	{
		path:'/buhui',
		mane:'Buhui',
		component:Buhui
	},
	{
		path:'/zhoubian',
		mane:'Zhoubian',
		component:Zhoubian
	},
	{
		path:'/rban',
		mane:'Rban',
		component:Rban
	},
	{
		path:'/wan',
		mane:'Wan',
		component:Wan
	},
	{
		path:'/gao',
		mane:'Gao',
		component:Gao
	},
	{
		path:'/Xeng',
		mane:'Xeng',
		component:Xeng
	}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
