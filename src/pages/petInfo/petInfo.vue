<template>
  <article class="pet pet-info-total">
    <meta name="referrer" content="no-referrer" />
    <pet-info-head></pet-info-head>
    <el-tabs type="border-card" v-model="activeName">
      <!-- v-model="activeName" class="eltabs" -->
      <el-tab-pane name="news">
        <span slot="label">
          <i class="el-icon-sunny"></i> 宠物新闻
        </span>
        <div class="pet-info-news" ref="infoNews">
          <ul class="pet-info-news-uls">
            <!-- <button @click="datalist">点击获取数据</button> -->
            <li v-for="(info, index) in InfoData" :key="index" class="pet-info-news-lis" :style='{borderBottom:`3px solid ${changeColor}`}'>
            <a :href="info.url" target="_blank">
              <span v-html="info.title"></span>
              <article class="news-style">
                <section
                  v-for="(imgL, index) in info.image_list.slice(0, 3)"
                  :key="index"
                  class="secPic"
                >
                  <div
                    class="opc-zhao"
                    :style="{ backgroundImage: `url(${imgL})`, filter: `blur(6px)` }"
                  ></div>
                  <img :src="imgL" alt="~~亲亲,图片找不到啦~~" />
                </section>
                <section class="section-src-sour">
                  <div class="srcdiv">
                    <span v-html="info.snippet" v-show="info.image_list.length < 3" class="src-span"></span>
                     
                  </div>
                  <!-- 当图片低于三张时的显示 -->
                  <div class="new-source" v-show="info.image_list.length < 3">
                    <span>{{info.source}}</span>
                    <span>{{new Date((new Date().getTime()-info.timestamp)).toString().replace(/GMT\+0800 \(中国标准时间\)/,'')}}</span>
                  </div>
                  
                </section>
                 
              </article>
              <!-- 当图片大于等于三张时显示 -->
              <div v-show="info.image_list.length >= 3" class="new-source">
                    <span>{{info.source}}</span>
                    <span>{{new Date((new Date().getTime()-info.timestamp)).toString().replace(/GMT\+0800 \(中国标准时间\)/,'')}}</span>
                  </div>
                  </a>
            </li>
          </ul>
          <div class="pagina-block">
            <el-pagination layout="prev, pager, next" :total="160"  background @current-change="chooseYe" 
            v-show="this.InfoData"></el-pagination>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane name="video">
        <span slot="label">
          <i class="el-icon-sunny"></i> 宠物视频
        </span>
        <div class="pet-info-news">
          <ul class="pet-info-news-uls">
            <button @click="datalist">点击获取数据</button>
            <li v-for="(info, index) in InfoData" :key="index" class="pet-info-news-lis">
              <span v-html="info.title"></span>
              <article>
                <section
                  v-for="(imgL, index) in info.image_list.slice(0, 3)"
                  :key="index"
                  class="secPic"
                >
                  <div
                    class="opc-zhao"
                    :style="{ backgroundImage: `url(${imgL})`, filter: `blur(10px)` }"
                  ></div>
                  <img :src="imgL" alt="~~亲亲,图片找不到啦~~" />
                </section>
              </article>
            </li>
          </ul>
        </div>
      </el-tab-pane>

      <el-tab-pane name="goodstory">
        <span slot="label">
          <i class="el-icon-sunny"></i> 宠物好故事
        </span>
        <div class="pet-info-news">
          <ul class="pet-info-news-uls">
            <!-- <button @click="datalist">点击获取数据</button> -->
            <li v-for="(info, index) in InfoData" :key="index" class="pet-info-news-lis">
              <span v-html="info.title"></span>
              <article>
                <section
                  v-for="(imgL, index) in info.image_list.slice(0, 3)"
                  :key="index"
                  class="secPic"
                >
                  <div
                    class="opc-zhao"
                    :style="{ backgroundImage: `url(${imgL})`, filter: `blur(10px)` }"
                  ></div>
                  <img :src="imgL" alt="~~亲亲,图片找不到啦~~" />
                </section>
              </article>
            </li>
          </ul>
        </div>
      </el-tab-pane>

      <el-tab-pane name="teenagers">
        <span slot="label">
          <i class="el-icon-sunny"></i> 宠物青少年
        </span>
        <div class="pet-info-news">
          <ul class="pet-info-news-uls">
            <!-- <button @click="datalist">点击获取数据</button> -->
            <li v-for="(info, index) in InfoData" :key="index" class="pet-info-news-lis">
              <span v-html="info.title"></span>
              <article>
                <section
                  v-for="(imgL, index) in info.image_list.slice(0, 3)"
                  :key="index"
                  class="secPic"
                >
                  <div
                    class="opc-zhao"
                    :style="{ backgroundImage: `url(${imgL})`, filter: `blur(10px)` }"
                  ></div>
                  <img :src="imgL" alt="~~亲亲,图片找不到啦~~" />
                </section>
              </article>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </article>
</template>

<script>
import PetInfoHead from "../../components/petInfoTotal/PetInfoHead.vue";
import axios from "axios";
export default {
  name: "petInfo",
  components: { PetInfoHead },
  data() {
    return {
      rLoading: '',
      change: true,
      InfoData: '',
      activeName: 'news'

    }
  },
  methods: {
    datalist(pn,ps,force) {
      return axios.get("/v5/general/v1/web/search", {
        params: {
          q: "宠物",
          pn: pn,
          ps: ps,
          force: force,
          // bid: '4262755367113002',
        },

      },
        this.change = false,
        this.rLoading = this.openLoading())
        //请求数据时打开遮罩
        .then(
          (response) => {
            console.log("Info接口请求成功", response.data.data.data);
            this.InfoData = response.data.data.data;
            this.rLoading.close()
            this.change = true
            if (response == undefined) {
              this.$message({
                // showClose: true,
                message:
                  " 抱歉，请求超时！",
                type: "warning",
                duration: 3000,
                showClose: true,
              });
            } else {
              this.$message({
                // showClose: true,
                message: " 已为您找到如下信息！",
                type: "success",
                duration: 2000,
                showClose: true,
              });
            }
          },
          (error) => {
            console.log("请求失败了", error.response);
            //请求后更新List的数据
          }
        );
    },
    
    //把异步函数变为同步不=函数 但api接口获取到数据后，再进行下一步的操作
    async chooseYe(val){
    await this.datalist(val,15,0)
    if(this.$refs.infoNews){
      // 点击跳页时，滚动条回到顶部
    this.$refs.infoNews.scrollTop = '0px'
    }
    }
  },
  //再进入路由之前修改baseurl的值
  beforeRouteEnter(to, from, next) {
    axios.defaults.baseURL = '/info', //解决跨域问题
      console.log('info路由触发了')
    next() //必须写，不写跳转不了 ，可以重新在next()中重新指定跳转目的
  },
  mounted() {
    this.datalist(1,15,0)
  }
}
</script>
  
<style scoped>
/* 想要实现背景图片透明度，可以在背景图片上加一层透明的白色遮罩，或者用::after来实现 */
.pet-info-news {
  height: calc(82vh - 141px);
  overflow: auto;
}
.pet-info-news-uls .pet-info-news-lis a> span {
  font: normal 700 23px "黑体";
  display: inline-block;
  color: black;
  line-height: 50px;
  transform: translateX(30px);
}
.pet-info-news-uls .pet-info-news-lis .news-style {
  display: flex;
  flex-wrap: nowrap;

}
span::v-deep em {
  color: red;
  font-style: normal;
}

.pet-info-news-lis {
  padding: 20px 0px;
  /* border-bottom: 3px solid rgba(235, 235, 235); */
}
.opc-zhao {
  width: 100%;
  height: 100%;

  /* filter: blur(10px); */
  /* 模糊效果 */
}
article .secPic {
  display: inline-block;
  position: relative;
  background-color: rgba(239, 240, 240);
  width: 33%;
  height: 200px;
  margin: 0px 20px;
  /* 这个hidden让超出边框的模糊直接隐藏掉了 */
  overflow: hidden;

  /* align-items: center; */
}
.srcdiv {
  display: flex;
  flex-direction: column;
}
article .secPic img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  /* z-index: 5; */
}
.srcdiv > .src-span {
  display: inline-block;
  /* transform: translateX(30px); */
  padding-left: 30px;
}
.pagina-block {
  text-align: center;
}
.src-span ,.src-span2 {
  display: inline-block;
  color: #000;
  /* display: flex;
  justify-content: center;
  align-content: center; */
}
.new-source span {
  display: inline-block;
  margin-top: 10px;
  padding-left: 30px;
  color: black;
  color:rgb(132,169,207) ;
}
.new-source span:nth-child(2) {
  margin-left: 20px;
}
</style>