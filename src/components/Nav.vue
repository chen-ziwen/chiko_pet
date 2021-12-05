<template>
  <div>
    <nav class="nav">
      <!-- 导航栏第一块 -->
      <div class="navF">
        <img src="../assets/dog.jpg" alt="图片已丢失">
        <span>宠物服务管理系统</span>
      </div>
      <!-- 导航栏第二块 -->
      <div class="navS">
        <ul>
          <!-- 这些到时候都改成路由形式,先写下来占个位置 -->
          <li>
            <router-link active-class="active" to="/FirstPage/pet1">首页</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/petMsg">宠物查询</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/petBeaty">宠物美容</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/petTreatment">宠物医疗</router-link>
          </li>

          <!-- <li><router-link active-class="active" to="/petTools">宠物工具</router-link></li> -->

        </ul>
      </div>
      <!-- 导航栏第三块 -->
      <div class="navT">
        <router-link active-class="active" to="/petRecord">后台数据</router-link>

        <el-dropdown>
           <a class="el-icon-arrow-down el-icon--right">设置</a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>更换头像</el-dropdown-item>
            <el-dropdown-item @click.native='exit()'>退出登陆</el-dropdown-item>
            <el-dropdown-item>选择背景</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </nav>

     <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'Nav',
    methods: {
      exit() {
        this.$confirm('是否退出该系统?',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功退出系统!',
            duration: 1000,
          });
          //跳转路由到login
           this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '退出系统已取消',
            duration: 1000,
          });
        });
      }
    }
  }
</script>

<style scoped>
 
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .navF,
  .navT {
    flex-grow: 1;
  }

  .navS {
    flex-grow: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .navT {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .navT a {
   display: inline-block;
    font: normal 700 20px "微软雅黑";
    cursor: pointer;
    text-align: center;
    color: #1E90FF;
    width: 120px;
    padding-bottom: 5px;
    }
  .navT a:hover {
    color: rgba(255,0,0,0.5);
  }

  .navT a:nth-of-type(2) {
    width: 50px;
  }

  .nav {
    display: flex;
    height: 11vh;
    justify-content: space-between;
    background-color: #FFFFFF;
    overflow: hidden;

  }

  .nav img {
    height: 11vh;
    vertical-align: middle;

  }

  .nav ul {
    display: flex;
    justify-content: space-between;

  }

  .navS ul li {
    font: normal 700 20px "微软雅黑";
    border-bottom: 4px solid rgba(100, 100, 100, 0);
    margin-left: 25px;
  }
  
  .navS ul li:nth-of-type(1) {
    margin-right: 40px;
  }

  .navS ul li:nth-of-type(n+2) a, 
  .nav ul li:nth-of-type(1) a {
    display: inline-block;
    text-align: center;
    color: #1E90FF;
    width: 120px;
    padding-bottom: 5px
    }
   
 

  .nav ul li:nth-of-type(1) a {
    width: 80px;
  }

 .navS ul li a:hover {
     color: rgba(255,0,0,0.5);
  }

  .navF span {
    display: inline-block;
    color: black;
    font: italic 700 30px "黑体";
    text-shadow: 3px 3px 3px rgba(100, 100, 100, 1);
  }

  .nav li:hover {
    border-bottom: 4px solid skyblue;
  }
</style>