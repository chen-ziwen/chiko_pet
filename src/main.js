import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Table,Row,Button,form, TableColumn, FormItem, Input, Icon, Dropdown, DropdownMenu, DropdownItem} from 'element-ui'
import {store} from './store/store'
import axios from 'axios'




Vue.config.productionTip = false
Vue.component(Table.name,Table) //配置全局组件
Vue.component(Row.name,Row)
Vue.component(Button.name,Button)
Vue.component(form.name,form)
Vue.use(TableColumn)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(Icon)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(DropdownItem)


// router.beforeEach(function(to, from, next) {

//       // from.path == '/login'
//       if (to.path == '/login') {

//           return next('/FirstPage/pet1')
//       }
      
//      next()
// })

new Vue({
  el:'#app',
  components:{},
  render: h => h(App),
  router,
  store,
  axios,
  // mounted() {
  //   console.log('我是vm',this)
  // },
  beforeCreate(){
   Vue.prototype.$bus = this  //设置全局总线
  }
})
