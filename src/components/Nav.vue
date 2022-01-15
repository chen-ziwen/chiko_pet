<template>
  <div>
    <nav class="nav" :style='{backgroundColor:changeColor}'>
      <!-- 导航栏第一块 -->
      <div class="navF">
        <img src="../assets/rb.png" alt="图片已丢失">
        <span>宠物服务管理系统</span>
      </div>
      <!-- 导航栏第二块 -->
      <div class="navS">
        <ul>
          <!-- 这些到时候都改成路由形式,先写下来占个位置 -->
          <li>
            <!-- active-class 用来给路由设置选中时的样式 -->
            <router-link active-class="nav-active" to="/FirstPage/pet1">首页</router-link>
          </li>
          <li>
            <router-link active-class="nav-active" to="/petMsg">宠物查询</router-link>
          </li>
          <li>
            <router-link active-class="nav-active" to="/petBeaty">宠物美容</router-link>
          </li>
          <li>
            <router-link active-class="nav-active" to="/petTreatment">宠物医疗</router-link>
          </li>

          <!-- <li><router-link active-class="active" to="/petTools">宠物工具</router-link></li> -->

        </ul>
      </div>
      <!-- 导航栏第三块 -->
      <div class="navT">
        <router-link active-class="nav-active" to="/petRecord">后台数据</router-link>

        <el-dropdown>
          <a class="el-icon-arrow-down el-icon--right">设置</a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>更换头像</el-dropdown-item>
            <el-dropdown-item @click.native='exit()'>退出登陆</el-dropdown-item>
            <el-dropdown-item>背景选择
           <el-color-picker v-model="color" show-alpha :predefine="predefineColors" size='medium' class="color"
           ></el-color-picker>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </nav>
    <!-- 通过keep-alive缓存路由，不让路由被销毁 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        visible: false,
        color: 'rgba(30, 144, 255, 0.59)',
        predefineColors: [
          'rgb(253,84,78)',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'rgba(0, 186, 189, 0.55)',
          'hsla(209, 100%, 56%, 0.73)',
          'rgba(197, 36, 137, 0.38)'
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
    computed: {
      changeColor() {
        return this.$store.state.color
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
 
  .color {
    transform: translateY(10px);
    /* display: none; */
    opacity: 0.9;
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

  .nav {
    display: flex;
    height: 10vh;
    justify-content: space-between;
    /* background-color: #FDCED7; */
    overflow: hidden;

  }

  .nav .navF {
    height: 10vh;
  }

  .nav img {
    height: 10vh;
    vertical-align: middle;

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

  .navF span {
    display: inline-block;
    color: black;
    width: 250px;
    white-space: nowrap;
    font: italic 700 30px "黑体";
    text-shadow: 3px 3px 3px rgba(100, 100, 100, 1);
  }

  /* .nav li:hover {
    border-bottom: 4px solid skyblue;
  } */
  .router-link-active {
    background: rgba(255, 255, 255, 0.8);
    color: gray;
    font-size: 50px;
  }
</style>