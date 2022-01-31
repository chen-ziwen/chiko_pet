import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/element-ui'
import {store} from './store/store'
import axios from 'axios'
import {changeColor} from './assets/js/mixin'
axios.defaults.baseURL = '/api'
//全局混合颜色方法
Vue.mixin(changeColor)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
  axios,
  beforeCreate(){
   Vue.prototype.$bus = this  //设置全局总线
  },
 })
