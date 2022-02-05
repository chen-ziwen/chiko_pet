<template>
  <article class="pet pet-info-total">
    <meta name="referrer" content="no-referrer" />
    <pet-info-head></pet-info-head>
    <el-tabs type="border-card" v-model="activeName" class="eltabs">
      <el-tab-pane name="news">
        <span slot="label">
          <i class="el-icon-data-analysis"></i> 宠物新闻
        </span>
        <article class="pet-info-news" ref="infoNews">
          <ul class="pet-info-news-uls">
            <li
              v-for="(info, index) in InfoData"
              :key="index"
              class="pet-info-news-lis"
              :style="{ borderBottom: `3px solid ${changeColor}` }"
            >
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
                      <span
                        v-html="info.snippet"
                        v-show="info.image_list.length < 3"
                        class="src-span"
                      ></span>
                    </div>
                    <!-- 当图片低于三张时的显示 -->
                    <div class="new-source" v-show="info.image_list.length < 3">
                      <span>{{ info.source }}</span>
                      <span>{{ new Date(info.timestamp * 1000).toString().replace(/GMT\+0800 \(中国标准时间\)/, '') }}</span>
                    </div>
                  </section>
                </article>
                <!-- 当图片大于等于三张时显示 -->
                <div v-show="info.image_list.length >= 3" class="new-source">
                  <span>{{ info.source }}</span>
                  <span>{{ new Date(info.timestamp * 1000).toString().replace(/GMT\+0800 \(中国标准时间\)/, '') }}</span>
                </div>
              </a>
            </li>
          </ul>
          <div class="pagina-block">
            <el-pagination
              layout="prev, pager, next"
              :total="160"
              background
              @current-change="chooseYe"
              v-show="this.InfoData"
            ></el-pagination>
          </div>
        </article>
      </el-tab-pane>

      <el-tab-pane name="video">
        <span slot="label">
          <i class="el-icon-video-play"></i> 宠物视频
        </span>
        <article class="pet-info-video" ref="infoVideo">
          <ul class="pet-info-video-uls">
            <li v-for="(video, index) in VideoList" :key="index" class="pet-info-video-lis">
              <a :href="video.url" target="_blank">
                <section class="secPic-2">

                  <div class="opc-zhao" :style="{ backgroundImage: `url(${video.image_src})`, filter: `blur(6px)` }"></div>

                  <i class="el-icon-video-play fangxing" v-show="video.duration">
                    <span class="fontsize-span">{{ video.duration }}</span>
                  </i>
                  <img :src="video.image_src" alt="~~亲亲,图片找不到啦~~" />
                </section>

                <span v-html="video.title" class="video-span"></span>

                <section class="video-source">
                  <span>{{ video.site_name }}</span>
                  <span>{{ new Date(video.VideoPubDate * 1000).toString().replace(/GMT\+0800 \(中国标准时间\)/, '') }}</span>
                </section>
              </a>
            </li>
          </ul>
          <div class="pagina-block">
            <el-pagination
              layout="prev, pager, next"
              :total="190"
              background
              @current-change="chooseVideoYe"
              v-show="this.VideoList"
            ></el-pagination>
          </div>
        </article>
      </el-tab-pane>

      <el-tab-pane name="goodstory">
        <span slot="label">
          <i class="el-icon-tickets"></i> 宠物好故事
        </span>
        <article class="pet-info-news" ref="infoStory">
          <ul class="pet-info-news-uls">
            <li
              v-for="(story, index) in StoryList"
              :key="index"
              class="pet-info-news-lis"
              :style="{ borderBottom: `3px solid ${changeColor}` }"
            >
              <a :href="story.url" target="_blank">
                <span v-html="story.title"></span>
                <article class="news-style">
                  <section v-for="(imgS, index) in story.image_list" :key="index" class="secPic">
                    <div
                      class="opc-zhao"
                      :style="{ backgroundImage: `url(${imgS})`, filter: `blur(6px)` }"
                    ></div>
                    <img :src="imgS" alt="~~亲亲,图片找不到啦~~" />
                  </section>
                  <section class="section-src-sour">
                    <div class="srcdiv">
                      <span v-html="story.snippet" class="src-span"></span>
                    </div>
                    <div class="new-source">
                      <span>{{ story.source }}</span>
                      <span>{{ new Date(story.timestamp * 1000).toString().replace(/GMT\+0800 \(中国标准时间\)/, '') }}</span>
                    </div>
                  </section>
                </article>
                <div class="storyTags">
                <span v-for="(str,index) in JSON.parse(story.extend).tags" :key="index" class="storyt">
                {{str}}
                </span>
                </div>
              </a>
            </li>
          </ul>
          <div class="pagina-block">
            <el-pagination
              layout="prev, pager, next"
              :total="90"
              background
              @current-change="chooseStory"
              v-show="this.StoryList"
            ></el-pagination>
          </div>
        </article>
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
      VideoList: '',
      StoryList: '',
      activeName: 'news',
    }

  },
  methods: {
    datalist(pn, ps, force) {
      return axios.get("/v5/general/v1/web/search", {
        params: {
          q: "宠物",
          pn: pn,
          ps: ps,
          force: force,
        },

      },
        this.change = false,
        this.rLoading = this.openLoading())
        //请求数据时打开遮罩
        .then(
          (response) => {
            console.log("datalist接口请求成功", response);
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
    videolist(start_index) {
      return axios.get("v5/general/v1/search/video", {
        params: {
          q: "宠物",
          start_index: start_index,
          rn: 20,
          cate: 'video'
        },
      },
        this.change = false,
        this.rLoading = this.openLoading())
        //请求数据时打开遮罩
        .then(
          (response) => {
            console.log("video接口请求成功", response.data.data.arrRes);
            this.VideoList = response.data.data.arrRes;
            this.rLoading.close()
            this.change = true
            if (response == undefined) {
              this.$message({
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
    storylist(start_index, pn) {
      return axios.get("v5/general/v1/web/search/story", {
        params: {
          q: "宠物",
          ps: 15,
          start_index: start_index, //0 点击一次加十五
          pn: pn,  // 1 点击一次加一

        },
      },
        this.change = false,
        this.rLoading = this.openLoading())
        //请求数据时打开遮罩
        .then(
          (response) => {
            console.log("story接口请求成功", response.data.data.data);
            this.StoryList = response.data.data.data;
            this.rLoading.close()
            this.change = true
            if (response == undefined) {
              this.$message({
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
    chooseYe(val) {
      this.datalist(val, 15, 0)
      if (this.$refs.infoNews) {
        // 点击跳页时，滚动条回到顶部
        this.$refs.infoNews.scrollTop = '0px'
      }
    },
    chooseVideoYe(val) {
      this.videolist((val - 1) * 20)
      if (this.$refs.infoVideo) {
        // 点击跳页时，滚动条回到顶部
        this.$refs.infoVideo.scrollTop = '0px'
      }
    },
    chooseStory(val) {
      this.storylist((val-1)*15,val)
      if(this.$refs.infoStory) {
        this.$refs.infoStory.scrollTop = '0px'
      }
    }

  },
  //再进入路由之前修改baseurl的值
  beforeRouteEnter(to, from, next) {
    axios.defaults.baseURL = '/info', //解决跨域问题
      // console.log('info路由触发了')
      next() //必须写，不写跳转不了 ，可以重新在next()中重新指定跳转目的
  },
  watch: {
    activeName: {
      handler() {
        if (this.activeName == 'news') {
          this.datalist(1, 15, 0)
        }
        else if (this.activeName == 'video') {
          this.videolist(0)
        }
        else if (this.activeName == 'goodstory') {
          this.storylist(0, 1)
        }
      },
      immediate: true,
    }
  }
}
</script>
  
<style scoped>
/* 想要实现背景图片透明度，可以在背景图片上加一层透明的白色遮罩，或者用::after来实现 */
.pet-info-news,
.pet-info-video {
  height: calc(82vh - 141px);
  overflow: auto;
}
.pet-info-video {
  text-align: center;
}
.pet-info-video-uls .pet-info-video-lis {
  display: inline-block;
  width: 21%;
  padding: 15px;
  vertical-align: top;
}
.pet-info-news-uls .pet-info-news-lis a > span {
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
/* 新闻的图片样式 */
article .secPic {
  display: inline-block;
  position: relative;
  background-color: rgba(239, 240, 240);
  width: 33%;
  height: 200px;
  margin: 0px 20px;
  /* 这个hidden让超出边框的模糊直接隐藏掉了 */
  overflow: hidden;
}
article .secPic img,
article .secPic-2 img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
/* 视频的图片样式 */
article .secPic-2 {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 3%;
}
.srcdiv > .src-span {
  display: inline-block;
  padding-left: 30px;
}
.pagina-block {
  text-align: center;
  margin-top: 25px;
}
.src-span,
.src-span2 {
  display: inline-block;
  color: #000;
}
.new-source span {
  display: inline-block;
  margin-top: 10px;
  margin-left: 30px;
  color: rgb(132, 169, 207);
}
.new-source span:nth-child(2) {
  margin-left: 30px;
}
.video-span {
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  color: #000;
}
.video-source span {
  color: rgb(132, 169, 207);
}
.video-source span:nth-child(2) {
  margin-left: 10px;
}
.video-source {
  margin-top: 10px;
}
.fangxing {
  position: absolute;
  width: 100px;
  height: 30px;
  font-size: 31px;
  line-height: 30px;
  color: gray;
  opacity: 0.85;
  background-color: rgb(200, 205, 209);
  border-radius: 20px;
  z-index: 10;
  bottom: 5px;
  left: 5px;
}
.fontsize-span {
  display: inline-block;
  font-size: 18px;
  color: rgba(220 220 220 0.8);
  transform: translate(2px, -4px);
}
.storyTags .storyt {
  display: inline-block;
  border: 1px solid rgb(216,169,153);
  background-color: rgb(246,238,235);
  color: rgb(216,169,153) !important;
  padding: 5px 15px;
  margin: 0px 10px;
}
.storyTags {
  margin-top: 15px;
  margin-left: 20px;
}
</style>