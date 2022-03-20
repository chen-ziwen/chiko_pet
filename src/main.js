import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/element-ui'
import {store} from './store/store'
import axios from 'axios'
import {changeColor} from './assets/js/mixin'
// axios.defaults.baseURL = '/api'
//全局混合颜色方法
Vue.mixin(changeColor)

Vue.config.productionTip = false

//对路由的跳转进行验证
router.beforeEach((to,from,next)=>{
   //修改路由跳转信息
   if (to.meta.title) {
      document.title = to.meta.title
   }
   //赋值一个对象 ，不然state会出错
   let Login = JSON.parse(sessionStorage.getItem('login'))|| {number:'',password:''};
   //模块化的VueX传值必须加上模块名
   store.commit('userLogin/login',Login);
   if (to.path === '/login') {
      next();
    } else {
    if(store.state.userLogin.login.password) {
      next();
    }
    else {
       next({path:'/login'})
    }
   }
   
})


new Vue({
//   el:'#app',
  render: h => h(App),
  router,
  store,
  axios,
  beforeCreate(){
   Vue.prototype.$bus = this  //设置全局总线
  },
 }).$mount('#app')

