<template>
  <footer class="foots">
    <h3>在我们生活的这个世界上，最大的不幸就是有些人完全拒绝新奇 {{author}}</h3>
      <!-- <h1>{{$store.state.age}}</h1>
      <button @click='duoone' >点击加1</button>
      <button @click="shaoone">点击减1</button>
      <button @click="waitduo">等等再加</button> -->
      <!-- <slot name="add" :test='test' :hello ='hello'>hah</slot> -->
  </footer> 
</template>

<script>
export default {
   name : 'Foots',
   props : {
     author : {
       tyepe: String,
       default : ''
     }
    
   },
   data () {
     return {
       value : 1,
       love : '我喜欢你，我在尝试把自己传到store里去',
       test : {
         name :'陈子文',
         age : 22 ,
         sex : '男'
       },
       hello :[1,2,3,4,5,6,7,8,9]
     }
   },
   methods : {
     duoone(){
      this.$store.dispatch('duo', this.value)
     },
     shaoone() {
      this.$store.commit('shao', this.value)
     },
     waitduo() {
       this.$store.dispatch('wduo',this.value)
     }
   },
   //可以直接写在mounted中 这样就不要通过点击事件来触发 
  //  dispath 派遣
  //  commit 承诺
  //  action 行为
  //  mutation 转变
  //  state 状态
   mounted () {
     this.$store.dispatch('jiagon',this.love)
   }
}
</script>

<style scoped>
   .foots {
     text-align: center;
     height:8vh;
     background-color: #FDCED7;
   }
   .foots h3 {
     line-height: 8vh;
   }
</style>