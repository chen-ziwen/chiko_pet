<template>
  <div>
    <el-carousel :interval="5000" type="card" height="265px">
    <el-carousel-item v-for="(img,index) in imgList" :key="index">
      <img :src="img.url" alt=" 图片已丢失" class="imglist">
    </el-carousel-item>
  </el-carousel>

  </div>

</template>

<script>
export default {
    name : 'pet3',
    data () {
        return {
           imgList : [
             {url: require('../../../assets/1.jpg')},
             {url: require('../../../assets/2.jpg')},
             {url: require('../../../assets/3.jpg')},
             {url: require('../../../assets/4.jpg')},
             {url: require('../../../assets/5.jpg')},
             {url: require('../../../assets/6.jpg')},
             
           ]
        }
    }
   
}
</script>

<style scoped>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .imglist {
    width: 100%;
    height: 100%;
  }
</style>