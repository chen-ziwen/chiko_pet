<template>
  <div class="pet3"> 
     <section class="xuan-zhuan">
         <div class="z"></div>
         <div class="b"></div>
         <div class="s"></div>
         <div class="x"></div>
         <div class="zo"></div>
         <div class="y"></div>
     </section>
  </div>

</template>

<script>
export default {
    name : 'pet3',
    data () {
        return {
        
        }
    }
   
}
</script>

<style scoped>
 .pet3 {
   height: 100%;
   overflow: auto;
 }

  .imglist {
    width: 100%;
    height: 100%;
  }
  body {
        perspective: 1000px;
        
    } 
     .xuan-zhuan {
         position: relative;
         width: 200px;
         height: 400px;
         margin: 150px auto;
         transform-style: preserve-3d;
         animation: xuan 8s linear infinite;
       
         
     } 
      .z,.b,.s,.x,.zo,.y {
        position: absolute;
        width: 200px;
        height: 200px;
        opacity: 0.85;
      }

     .z {
         /* background-color: yellow; */
         background-image: url('../../../assets/1.jpg');
         background-size: 200px 200px;
         
     }
     .b {
         /* background-color: whitesmoke; */
         transform: translateZ(-200px);
         background-size: 200px 200px;
         background-image: url('../../../assets/2.jpg');
        
     }
     .s {
         /* background-color: red; */
         background-image: url('../../../assets/3.jpg');
         background-size: 200px 200px;
         transform:  translate3d(0px,-100px,-100px) rotateX(90deg) ;
     }
     .x {
         /* background-color: sandybrown; */
         background-image: url('../../../assets/4.jpg');
         background-size: 200px 200px;
         transform: translate3d(0px,100px,-100px) rotateX(-90deg) ;
     }
     .zo {
         /* background-color: lightgreen; */
         background-image: url('../../../assets/5.jpg');
         background-size: 200px 200px;
         transform: translate3d(-100px,0px,-100px) rotateY(-90deg);
     }
     .y {
         /* background-color: blue; */
         background-image: url('../../../assets/6.jpg');
         background-size: 200px 200px;
         transform: translate3d(100px,0px,-100px) rotateY(90deg);
     }
     @keyframes xuan {
         100% {
            transform: rotate3d(0,1,1,360deg);  
         }
     }
    .xuan-zhuan:hover {
        animation-play-state: paused;
    }
</style>