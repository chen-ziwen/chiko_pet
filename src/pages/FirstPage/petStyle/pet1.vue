<template>
  <div>
     <div class="side">
       <Pet1Search></Pet1Search>
       <Pet1X></Pet1X>
     </div>
  </div>
</template>

<script>
import Pet1X from '../../../components/pet1Total/Pet1X'
import Pet1Search from '../../../components/pet1Total/Pet1Search'
export default {
    name : 'pet1',
    data () {
        return {
           
        }
       
    },
     components: {
          Pet1X,
          Pet1Search
        }
   
}
</script>

<style scoped>
   
</style>