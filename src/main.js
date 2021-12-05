import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/element-ui'
import {store} from './store/store'
import axios from 'axios'



Vue.config.productionTip = false

new Vue({
  el:'#app',
  components:{},
  render: h => h(App),
  router,
  store,
  axios,
  beforeCreate(){
   Vue.prototype.$bus = this  //设置全局总线
  }
})
