<template>
  <div>
    <form class="petform">
      <ul>
        <li>宠物品种：<input type="text" placeholder="请输入宠物名称" v-model="shuju.id"> </li>
        <li>宠物名称：<input type="text" placeholder="请输入宠物名称" v-model="shuju.name"> </li>
        <li>主人姓名：<input type="text" placeholder="请输入主人姓名" v-model="shuju.ownerName"> </li>
        <li>联系电话：<input type="number" placeholder="请输入联系电话" v-model="shuju.number"> </li>
        <li>家庭住址：<input type="text" placeholder="请输入家庭住址" v-model="shuju.address"> </li>
        <li>宠物描述：<input type="text" placeholder="请添加宠物描述" v-model="shuju.describe"> </li>
        <button type="button" @click="submit">保 存 宠 物 信 息</button>
        <!-- 在表单form中设置button 要给button标签设置type，不然会默认为submit，会刷新页面 -->
      </ul>
    </form>
  </div>
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

    }
  }
</script>

<style scoped>
  .petform {
    position: relative;
    height: 350px;
    border: 2px solid red;
    
  }

  .petform input {

    line-height: 35px;
    height: 35px;
    /* outline: none; */
    padding-left: 15px;
    /* background: none; */

  }

  .petform ul li {
    float: left;
    margin-left: 50px;
    margin-top: 60px;
    font-weight: 700;
    user-select: none;
  }
 
  .petform button {
    position: absolute ;
    left: 50%;
    bottom: 18px;
    transform: translateX(-50%);
    /* margin-left: 70px;
    bottom: -35px; */
    outline: none;
    background: none;
    width: 900px;
    height: 85px;
    font-size: 30px;
    font-weight: 700;
    outline: none;
    border: 5px solid whitesmoke;
    cursor: pointer;
    transition: all 0.8s;
  }
  .petform button:hover {
   box-shadow: 8px 8px 10px rgba(100,100,100,0.7) ;
   color: #c93756;
   
  } 
</style>