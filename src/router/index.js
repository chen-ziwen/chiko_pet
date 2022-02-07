import Vue from "vue";
import VueRouter from 'vue-router'
// import { component } from "vue/types/umd";
//这种引入方式叫做路由的懒加载，这样定义能够被 Webpack自动代码分割的异步组件。
//当路由组件多的时候，不会一次性去加载，导致页面出现空白卡顿，原理是promise异步操作
const petMsg = () => import(/* webpackChunkName: "group-foo" */ '../pages/petMsg/petMsg')
const petMovie = () => import ('../pages/petMovie/petMovie')
const petInfo = () => import ('../pages/petInfo/petInfo')
const petRecord = () => import ('../pages/petRecord/petRecord')
const petTools = () => import ( '../pages/petTools/petTools')
const FirstPage = () => import('../pages/FirstPage/FirstPage')
const pet1 = () => import('../pages/FirstPage/petStyle/pet1')
const pet2 = () => import('../pages/FirstPage/petStyle/pet2')
const pet3 = () => import ('../pages/FirstPage/petStyle/pet3')
const pet4 = () => import('../pages/FirstPage/petStyle/pet4')


//下面这种是正常情况下引入，路由多时不推荐使用
// import petMsg from '../pages/petMsg/petMsg'


Vue.use(VueRouter)


export default new VueRouter({
    // linkActiveClass : 'active',  //当路由被选中时，标签的样式
    routes: [ 
        {
            path: '/',
            // redirect: '/FirstPage/pet1'
            redirect: '/login'
           
        }, //设置默认跳转到home首页
        
         {  
             name : 'index',
             path : '/index',
             component : ()=> import('../view/index.vue'),
             children: [
                {   name : 'FirstPage',
                    path: '/FirstPage',
                    component: FirstPage,
                    meta:{keepAlive:true},
                    children: [
        
                        {
                        name : 'pet1',
                        path: 'pet1',
                        component: pet1,
                       },
        
                       {
                       //取个名字可以直接跳转
                        name : 'pet2',
                        path: 'pet2/:id/:title',
                        component: pet2,
                       },
        
                       {
                        name : 'pet3',
                        path: 'pet3',
                        component: pet3,
                       },
                       {
                        name : 'pet4',
                        path : 'pet4',
                        component : pet4,
                       }
                ]
                },
                    
                {  
                    name : 'petMsg',
                    path: '/petMsg',
                    component: petMsg,
                    // children: [path:'/petMsg/pet1',component]
                },
                {   
                    name : 'petMovie',
                    path: '/petMovie',
                    component: petMovie
                },
                {   
                    name : 'petInfo',
                    path: '/petInfo',
                    component: petInfo
                },
                {   
                    name : 'petRecord',
                    path: '/petRecord',
                    component: petRecord
                },
                {   
                    name : 'petTools',
                    path: '/petTools',
                    component: petTools
                },
             ]

         },

         {   
             name : 'login',
             path: '/login' ,
             component: () => import('../pages/login/login.vue'),
         },
        ]
    
})