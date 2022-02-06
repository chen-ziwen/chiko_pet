<template>
  <div class="pet">
     <ul class="uls" :style='{borderRight:`2px solid ${changeColor}`}'>
         <!-- 命名路由非常的简洁，适合多重路由使用  eg.  to="{name:'czw'}"-->
         <li><router-link active-class="active" to="/FirstPage/pet1">信息登记</router-link></li>
          <!-- 跳转的同时，通过params把信息传到$route中，通过this.$route.params即可拿到 -->
         <li><router-link active-class="active" 
         :to="{
            name:'pet2',
            params: {
            id: msg[0].id,
            title: msg[0].title
            }
        }">故事记录</router-link></li>
         <li><router-link active-class="active" to="/FirstPage/pet3">图片展示</router-link></li>
          <li><router-link active-class="active" to="/FirstPage/pet4">驯养情况</router-link></li>
     </ul>
     
      <div class="poistion"><keep-alive><router-view></router-view></keep-alive></div>
       
  </div>
</template>

<script>

export default {
    name : 'FirstPage',
    data () {
        return {
            msg:[
					{id:'陈子文',title:'只要知道他很帅就行了，其他的不需要关注'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
        }
        
    },
}
</script>

<style scoped>
    
    .uls {
        float: left;
        list-style: none;
        width: calc(13vw - 4px);
        height: 82vh;
        border-right :2px solid red;
        overflow: auto;
        
    }
    .uls li {
        width: calc(12vw - 14px);
        padding: 30px 0px;
    }
    .uls li a {
        display: inline-block;
        /* text-align: center; */
        transform: translateX(1vw);
        padding: 10px 0px 10px 10px;
        width: 100%;
        font-size: 20px;
        font-weight: 400;
        color: black !important;
        text-decoration: none;
    }
    
    .poistion {
       float: left;
       width: 87vw;
       height: 82vh;
       background-color:whitesmoke; 
       overflow: auto; 
    }
    .poistion::after {
        content: "";
        display: block;
        height: 0px;
        clear: both;
    }
    .pet .uls li a {
     color: black;
    }
    .pet .uls li a:hover {
     color: rgba(255,0,0,0.7) !important;
    }
</style>