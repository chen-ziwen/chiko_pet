<template>
  <div class="pit">
    <Nav/>
    <Foots/>
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
 }
}
</script>

<style>

</style>