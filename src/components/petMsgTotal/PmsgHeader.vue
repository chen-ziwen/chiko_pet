<template>
  <header id="head">
    <h1>宠物查询</h1>
    <div class="hbox">
     <input type="text" placeholder="请输入宠物的全名"  v-model="Msgs"  @keydown.enter="search">
     <button @click="search">搜索</button>
     </div>
  </header>
</template>

<script>
import axios from 'axios'
export default {
  name : 'PmsgHeader',
  data () {
    return {
       Msgs:''
    }
  },
  methods : {
    search() {
      axios.get(`http://api.tianapi.com/pet/index?key=4a3a0af227c894c20d191d30ce67ff22&name=${this.Msgs}`).then(
					response => {
						//response.data 拿到接口里的所有内容
            console.log('请求成功了',response.data.newslist)
            this.$bus.$emit('sendMsgs',response.data.newslist)
            // this.Total = response.data.newslist
           //杜宾、贵宾、哈士奇、苏格兰折耳猫、卡斯罗犬、大丹犬、暹罗猫、阿拉斯加雪橇犬、美国可卡犬、金毛犬、布偶猫
						//请求成功后更新List的数据
						// this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
					},
					error => {
            console.log('请求失败了',error.response)
            alert('没找到')
						//请求后更新List的数据
						// this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
					}
				)
    }
  }
}
</script>

<style scoped>
    #head {
      height: 70px;    
      /* 高等于70px */
      background-color: cornflowerblue;
    }
    button {
      display: block;
      float: left;
      height: 40px;
      width: 90px;
    }

    input {
      display: block;
      float: left;
      padding-left: 10px;
      height: 36px;
      width: 200px;
      outline: none;
    }
    
    h1 {
      display: inline-block;
      line-height: 70px;
      transform: translate(40px,0);
      color: whitesmoke;
    }
    .hbox {
      float: right;
      transform: translate(-100px,15px);
      height: 40px;
      width: 310px;
    }
</style>