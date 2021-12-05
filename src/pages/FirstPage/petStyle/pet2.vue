<template>

    <!-- tabs-pane有具名插槽和默认插槽，默认插槽显示的内容在导航栏一下，
    具名插槽名字叫label 显示的内容在导航栏每个选项的内部 -->
    
  <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-circle-plus"></i> 记录你的故事</span>
    <div class="record">
      <h1>我用来记录故事</h1>
      
    </div>
  </el-tab-pane>

  <el-tab-pane> 
    <span slot="label"><i class="el-icon-star-on"></i> 查看你的故事</span>
     <div class="check">
       <h1>里面会呈现出好多条故事记录，双击即可打开</h1>
     </div>
  </el-tab-pane>

  <el-tab-pane>
    <span slot="label"><i class="el-icon-s-promotion"></i> 分享你的故事</span>
    <div class="share">
      <h1>我可以把故事分享到一些社交平台</h1>
    </div>
  </el-tab-pane>

</el-tabs>
</template>

<script>


  export default {
    name: 'pet2',
    
  }
</script>

<style scoped>

.record,
.check,
.share {
  height: calc(70vh + 5px);
  background-color: wheat;
  overflow: auto;
}

</style>