<template>
  <header>
    <nav class="nav" :style='{backgroundColor:changeColor}'>
      <!-- 导航栏第一块 -->
      <div class="navF">
        <img src="../assets/lin.png" alt="图片已丢失">
        <span>Chiko千子宠物</span>
      </div>
      <!-- 导航栏第二块 -->
      <div class="navS">
        <ul>
          <!-- 这些到时候都改成路由形式,先写下来占个位置 -->
          <li>
            <!-- active-class 用来给路由设置选中时的样式 -->
            <router-link active-class="nav-active" to="/FirstPage">首页</router-link>
          </li>
          <li>
            <router-link active-class="nav-active" to="/petMsg">宠物查询</router-link>
          </li>
          <li>
            <router-link active-class="nav-active" to="/petMovie">宠物电影</router-link>
          </li>
          <li>
            <router-link active-class="nav-active" to="/petInfo">宠物资讯</router-link>
          </li>

          <!-- <li><router-link active-class="active" to="/petTools">宠物工具</router-link></li> -->

        </ul>
      </div>
      <!-- 导航栏第三块 -->
      <div class="navT">
        <span >主题色选择</span>
        <el-color-picker v-model="color" show-alpha :predefine="predefineColors" size='small' class="color"
           ></el-color-picker>
           
        <el-dropdown>
          <a class="el-icon-arrow-down el-icon--right">设置</a>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item>更换头像</el-dropdown-item> -->
            <el-dropdown-item @click.native='exit()'>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </nav>
    <!-- 通过keep-alive缓存路由，不让路由被销毁 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </header>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        visible: false,
        color: 'rgba(31, 147, 255, 0.51)',
        predefineColors: [
          //前面这几个颜色是我比较喜欢的颜色
          'rgba(31, 147, 255, 0.51)',
          'rgba(197, 36, 137, 0.38)',
          'rgba(241, 205, 1, 0.46)',
          'rgba(0, 186, 189, 0.49)',
          'rgba(255, 69, 0, 0.5)',
          'hsva(120, 40, 94, 0.5)',
          'rgb(212,235,241)',
          'rgb(253,84,78)',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgb(255, 120, 0)',
        ]
      }
    },
    methods: {
      exit() {
        this.$confirm('是否退出该系统?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功退出系统!',
            duration: 1000,
            showClose: true,
          });
          //跳转路由到login
          let loginValue = JSON.parse(sessionStorage.getItem('login'))
          loginValue.number = '',
          loginValue.password = '',
          sessionStorage.setItem('login',JSON.stringify(loginValue))
          this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '退出系统已取消',
            duration: 1000,
            showClose: true,
          });
        });
      }
    },
    //当颜色改变时，改变state
    watch: {
        color() {
           this.$store.commit('color',this.color)
        }
      }
  }
</script>

<style scoped>
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .nav {
    display: flex;
    height: 10vh;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;

  }
  .navF,
  .navT {
    display: flex;
    flex-grow: 1;
    
  }

.navT span:nth-of-type(1) {
  font-size: 20px;
  display: inline-block;
  white-space: nowrap;
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
    font: normal 400 20px "黑体";
    cursor: pointer;
    text-align: center;
    color: black;
    width: 120px;
    padding-bottom: 5px;
  }

  .navT a:hover {
    color: rgba(255, 0, 0, 0.5);
  }

  .navT a:nth-of-type(2) {
    width: 50px;
  }

 

  .nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .navS ul li {
    font: normal 400 20px "黑体";
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
    color: black;
    width: 120px;
    padding-bottom: 5px
  }



  .nav ul li:nth-of-type(1) a {
    width: 80px;
  }

  .navS ul li a:hover {
    color: rgba(255, 0, 0, 0.5);
  }
  
   .nav .navF img {
    height: 8vh;

  }
  .navF span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    width: 250px;
    white-space: nowrap;
    font: italic 700 1.8em "黑体";
    text-shadow:  3px 3px 3px rgba(100, 100, 100, 1);
  }

  .router-link-active {
    background: rgba(255, 255, 255, 0.8);
    color: gray;
    font-size: 50px;
  }
</style>