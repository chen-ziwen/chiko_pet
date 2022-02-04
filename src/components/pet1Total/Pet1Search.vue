<template>
  <header>
    <form class="petform">
      <ul>
        <li>宠物品种：<input type="text" placeholder="请输入宠物名称" v-model="shuju.id" :style='{border: `2px solid ${changeColor}`}'> </li>
        <li>宠物名称：<input type="text" placeholder="请输入宠物名称" v-model="shuju.name" :style='{border: `2px solid ${changeColor}`}'> </li>
        <li>主人姓名：<input type="text" placeholder="请输入主人姓名" v-model="shuju.ownerName" :style='{border: `2px solid ${changeColor}`}'> </li>
        <li>联系电话：<input type="number" placeholder="请输入联系电话" v-model="shuju.number" :style='{border: `2px solid ${changeColor}`}'> </li>
        <li>家庭住址：<input type="text" placeholder="请输入家庭住址" v-model="shuju.address" :style='{border: `2px solid ${changeColor}`}'> </li>
        <li>宠物描述：<input type="text" placeholder="请添加宠物描述" v-model="shuju.describe" :style='{border: `2px solid ${changeColor}`}'> </li>
        <button :style='{border: `3px solid ${changeColor}`}' type="button" @click="submit">保 存 宠 物 信 息</button>
        <!-- 在表单form中设置button 要给button标签设置type，不然会默认为submit，会刷新页面 -->
      </ul>
    </form>
  </header>
</template>

<script>
  export default {
    name: 'petform',
    data() {
      return {
        shuju: {
          name: '',
          number: '',
          ownerName: '',
          address: '',
          describe: '',
          id: '',
        },
        // arr: []
      }
    },
    methods: {
      submit() {
        //如果有一项为空，那么就提示
        if (this.shuju.name == '' ||
          this.shuju.number == '' ||
          this.shuju.address == '' ||
          this.shuju.describe == '' ||
          this.shuju.id == '' ||
          this.shuju.ownerName == '') {
          this.$message({
          message: ' 请完成每一项信息的输入',
          type: 'warning',
          duration : 1500,
          showClose: true,
          });
        }
        //没项都填写了信息，就把信息都发送给petX
        else {
          //弹出提示
          this.$message({
          message: ' 信息保存成功',
          type: 'success',
          duration : 1500,
          showClose: true,
          });
           //插入逻辑
          const differ = {...this.shuju} //让每一个送过去的对象地址都不一样，不会被一起修改
          this.$bus.$emit('petTMsg', differ)
           //localStorage中如果想只保存一条data，并且这个data是个数组，不想被覆盖的话就像我下面这么写
           let differTotal = JSON.parse(localStorage.getItem('data')) || []
           differTotal.push(differ)
           window.localStorage.setItem('data',JSON.stringify(differTotal))
          // console.log(localStorage.getItem('data'))
          // 输入的东西清空
          setTimeout(()=>{
            this.shuju.name = ''
            this.shuju.number = ''
            this.shuju.ownerName = ''
            this.shuju.address = ''
            this.shuju.describe = ''
            this.shuju.id = ''
          },200)  
          }

          
        // 将对象转换成JSON格式存入localStorage
        // 从localstorage中取出数据转换成对象格式

      }

    },
  }
</script>

<style scoped>
  .petform {
    position: relative;
    height: 348px;
    border-bottom: 1px solid black;
    border-top: 1px dashed black;
  }

  .petform input {
    line-height: 35px;
    height: 35px;
    padding-left: 15px;
    width: 200px;
    outline: none;

  }
  .petform ul li {
    display: inline-block;
    transform: translate(50px,10px);
    width: 30%;
    /* white-space: nowrap; */
    font-weight: 700;
    user-select: none;
  }
 .petform ul li:nth-of-type(n+3) {
   margin-top: 40px;
 }
  .petform button {
    position: absolute ;
    left: 50%;
    bottom: 25px;
    transform: translateX(-50%);
    outline: none;
    background: none;
    width: 80vw;
    height: 85px;
    font-size: 30px;
    font-weight: 700;
    outline: none;
    cursor: pointer;
    transition: all 0.8s;
  }
  .petform button:hover {
   box-shadow: 8px 8px 10px rgba(100,100,100,0.7) ;
   color: #c93756;
  } 
</style>