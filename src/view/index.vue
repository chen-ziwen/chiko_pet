<template>
  <div class="pit">
    <Nav/>
    <Foots author="©2022 Chen-ziwen">
      <!-- add是插槽的名字，testprops是自己定义的插槽props 用来接收传递过来的值-->
      <!-- v-slot:add 可以缩写为#add -->
      <!-- v-slot:add='{test}' 为解构插槽，不需要用插槽props来接收 ，直接解构接收 -->
    <!-- <template v-slot:add='{test,hello}'>
      {{test.name}}
      {{hello}} -->
      <!-- {{testprops.test.name}}
      {{testprops.hello}} -->
    <!-- <Nav></Nav> -->
    <!-- </template> -->
    </Foots>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Foots from '../components/Foots.vue'

export default {
 name : 'index',
 components: {
     Nav,
     Foots
 },
}
</script>

<style>

</style>