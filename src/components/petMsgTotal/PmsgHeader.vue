<template>
  <header id="head">
    <h1>{{title}}</h1>
    <div class="hbox">
     <input type="text" :placeholder='place' v-model="Msgs" @keydown.enter="search" >
     <button @click="search">搜索</button>
     </div>

  </header>
</template>

<script>
import axios from 'axios';
export default {
  
  name : 'PmsgHeader',
  props: {
    title:{
      type:String,
      require:true
    },
    place:{
      type:String,
      require:true
    }
  },
  data () {
    return {
       Msgs:''
    }
  },
  methods: {
    search() {
      axios.get(`http://api.tianapi.com/pet/index?key=4a3a0af227c894c20d191d30ce67ff22&name=${this.Msgs}`).then(
					response => {
						//response.data 拿到接口里的所有内容
            console.log('请求成功了',response)
            this.$bus.$emit('sendMsgs',response.data.newslist)
            if(response.data.newslist == undefined) {
             this.$message({
                        // showClose: true,
                        message: ' 抱歉，没有找到该宠物的信息。请确认是否输入正确的宠物名称！',
                        type: 'warning',
                        duration : 3000,
                        showClose: true,
                    });
            }
            else {
              this.$message({
                        // showClose: true,
                        message: ' 已为您找到如下信息！',
                        type: 'success',
                        duration : 2000,
                        showClose: true,
                    });
            }
           //杜宾、贵宾、哈士奇、苏格兰折耳猫、卡斯罗犬、大丹犬、暹罗猫、阿拉斯加雪橇犬、美国可卡犬、金毛犬、布偶猫
						//请求成功后更新List的数据
						
            this.Msgs = ''
					},
					error => {
            console.log('请求失败了',error.response)
						//请求后更新List的数据
					}
				)
    },
  }
}
</script>

<style scoped>
    #head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;    
      color: #000;
      /* background-image: linear-gradient(to right, #acb6e5 , #86fde8 ); */
      background-color: whitesmoke;
    }

     .hbox {
       display: flex;
       margin-right: 55px;
       justify-content: center;
       align-items: center;
       height: 40px;
       width: 414px;
    }
    button {
      display: inline-block;
      height: 40px;
      width: 150px;
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
    }

    input {
      display: inline-block;
      padding-left: 10px;
      height: 36px;
      width: 250px;
      outline: none;
      font-weight: 700;
    }
    
    #head h1 {
      display: inline-block;
      line-height: 70px;
      white-space: nowrap;
      font-size: 24px;
      color: black;
      margin-left: 80px;

    }
   
</style>