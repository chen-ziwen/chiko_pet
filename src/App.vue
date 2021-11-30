<template>
  <div>
   <router-view></router-view>
  </div>
</template>

<script>
// import Nav from './components/Nav.vue'
// import Foots from './components/Foots.vue'

export default {
  name: 'App',
 
  components: {
    //  Nav,
    //  Foots,
     
  },
  mounted () {
   console.log(this) 
  }
}
</script>

<style>
  @import "./assets/css/main.css";
  
</style>
