<template>
  <div class="pet side">
     <ul class="uls">
         <!-- 命名路由非常的简洁，适合多重路由使用  eg.  to="{name:'czw'}"-->
         <li><router-link active-class="active" to="/FirstPage/pet1">信息记录</router-link></li>
         <li><router-link active-class="active" 
         :to="{
            name:'pet2',
            params: {
            id: msg[0].id,
            title: msg[0].title
            }
        }">故事记录</router-link></li>
         <li><router-link active-class="active" to="/FirstPage/pet3">图片上传</router-link></li>
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
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
        }
    }
}
</script>

<style scoped>
    
    .uls {
        float: left;
        list-style: none;
        
    }
    .uls li {
        padding: 30px ;
    }
    .uls li a {
        padding: 5px;
        font-size: 20px;
        font-weight: 700;
    }
    a {
      text-decoration: none;
    } 
    
    .poistion {
       float: left;
       width: 900px;
       height: 80vh;
       background-color:rgba(255,192,203,0.55); 
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
     color: rgba(255,0,0,0.7);
    }
</style>