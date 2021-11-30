import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        //可以在这里面设置全局的数据
        czwname : 'chenziwen',
        age : +18
        
    },
    actions: {
        duo(context,value){
        if(context.state.age > 15)  {
            console.log('我是action中duo函数的第一个参数',context)
            //由后台数据可知，context是一个对象，里面有state，action，commit，dispath等的对象
            console.log('我是action中duo函数的第二个参数',value)
            //value是父组件传来的一个参数
            context.commit('duo',value)
        }
        },
        wduo(context,value){
            setTimeout(()=>{
             console.log('延时半秒再加')
             context.commit('duo',value)
            },500)
        },
        jiagon(context,value){
           context.state.love = value.split('')
           context.commit('jiagon',value)

        }
    },
    mutations: {
       duo(state,value) {
        console.log('duo在Mutation中被调用了')
        state.age += value
        console.log('我是mutation中duo函数的第一个参数',state)
        //第一个参数是state对象，第二个参数是父组件传来的一个参数
        console.log('我是mutation中duo函数的第二个参数',value)
       } ,
       shao(state,value) {
        console.log('shao在Mutation中被调用了')
        state.age -= value
       },
       jiagon(state) {
           console.log('我是改装后的数据',state)
       }
    },
    getters: {
        
    }
})
