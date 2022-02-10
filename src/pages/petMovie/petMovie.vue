<template>
  <article class="movie">
    <meta name="referrer" content="no-referrer" />
    <!-- 显示https图片加上上面一行 -->
    <pet-movie-head></pet-movie-head>
    <!-- 获取评分区间 -->
     <pet-movie-dital></pet-movie-dital>
    <el-tabs type="border-card" v-model="activeName" class="eltabs" v-show="this.$store.state.details">
      <el-tab-pane name="hot">
        <span slot="label" class="dontclick">
          <i class="el-icon-sunny"></i> 近期热门宠物电影
        </span>

        <div class="hot-movie" v-show="!ViewChange">
          <ul class="movie-uls">
            <li v-for="(hot, index) in hotmovie" :key="index" class="movie-lis">
              <!-- <a :href="hot.url" target="_blank"> -->
                <div class="colum-box" @click="getId(hot.id)">
                  <img :src="hot.cover" alt="图片丢失" />
                  <span class="span-title">
                    {{ hot.title }}
                    <span class="span-rate">{{ hot.rate }}</span>
                  </span>
                </div>
              <!-- </a> -->
            </li>
          </ul>
          <a
            href="javascript:;"
            class="more"
            @click.prevent="onload"
            v-show="change"
            >加载更多</a
          >
        </div>

        <div class="hot-movie" v-show="ViewChange">
          <ul class="movie-uls-2">
            <li
              v-for="(hot, index) in hotmovie"
              :key="index"
              class="movie-lis-2"
            >
              <a :href="hot.url" target="_blank">
                <div class="row-box">
                  <img :src="hot.cover" alt="图片丢失" />
                  <div class="text-total">
                    <span class="span-title">{{ hot.title }}</span>
                    <div class="rate">
                      <span class="Allstar">
                        <el-rate
                          v-show="hot.rate"
                          :value="Number((hot.rate / 2).toFixed(1))"
                          disabled
                          text-color="#ff9900"
                        ></el-rate>

                        <span class="rating">{{ hot.rate }}</span>
                      </span>
                    </div>
                    <p class="cast">
                      <span>导演 : {{ hot.directors.join(" / ") }}</span>
                      <span>演员 : {{ hot.casts.join(" / ") }}</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a
            href="javascript:;"
            class="more"
            @click.prevent="onload"
            v-show="change"
            >加载更多</a
          >
        </div>
      </el-tab-pane>

      <el-tab-pane name="sign">
        <span slot="label" class="dontclick">
          <i class="el-icon-star-on"></i> 标记最多宠物电影
        </span>

        <div class="sign-movie" v-show="!ViewChange">
          <ul class="movie-uls">
            <li
              v-for="(sign, index) in signmovie"
              :key="index"
              class="movie-lis"
            >
              <a :href="sign.url" target="_blank">
                <div class="colum-box">
                  <img :src="sign.cover" alt="图片丢失" />
                  <span class="span-title">
                    {{ sign.title }}
                    <span class="span-rate">{{ sign.rate }}</span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
          <a
            href="javascript:;"
            class="more"
            @click.prevent="onload"
            v-show="change"
            >加载更多</a
          >
        </div>

        <div class="sign-movie" v-show="ViewChange">
          <ul class="movie-uls-2">
            <li
              v-for="(sign, index) in signmovie"
              :key="index"
              class="movie-lis-2"
            >
              <a :href="sign.url" target="_blank">
                <div class="row-box">
                  <img :src="sign.cover" alt="图片丢失" />
                  <div class="text-total">
                    <span class="span-title">{{ sign.title }}</span>
                    <div class="rate">
                      <span class="Allstar">
                        <el-rate
                          v-show="sign.rate"
                          :value="Number((sign.rate / 2).toFixed(1))"
                          disabled
                          text-color="#ff9900"
                        ></el-rate>

                        <span class="rating">{{ sign.rate }}</span>
                      </span>
                    </div>
                    <p class="cast">
                      <span>导演 : {{ sign.directors.join(" / ") }}</span>
                      <span>演员 : {{ sign.casts.join(" / ") }}</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a
            href="javascript:;"
            class="more"
            @click.prevent="onload"
            v-show="change"
            >加载更多</a
          >
        </div>
      </el-tab-pane>

      <el-tab-pane name="score">
        <span slot="label" class="dontclick">
          <i class="el-icon-medal-1"></i> 评分最高宠物电影
        </span>

        <div class="score-movie" v-show="!ViewChange">
          <ul class="movie-uls">
            <li
              v-for="(score, index) in scoremovie"
              :key="index"
              class="movie-lis"
            >
              <a :href="score.url" target="_blank">
                <div class="colum-box">
                  <img :src="score.cover" alt="图片丢失" />
                  <span class="span-title">
                    {{ score.title }}
                    <span class="span-rate">{{ score.rate }}</span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
          <a
            href="javascript:;"
            class="more"
            @click.prevent="onload"
            v-show="change"
            >加载更多</a
          >
        </div>

        <div class="score-movie" v-show="ViewChange">
          <ul class="movie-uls-2">
            <li
              v-for="(score, index) in scoremovie"
              :key="index"
              class="movie-lis-2"
            >
              <a :href="score.url" target="_blank">
                <div class="row-box">
                  <img :src="score.cover" alt="图片丢失" />
                  <div class="text-total">
                    <span class="span-title">{{ score.title }}</span>
                    <div class="rate">
                      <span class="Allstar">
                        <el-rate
                          v-show="score.rate"
                          :value="Number((score.rate / 2).toFixed(1))"
                          disabled
                          text-color="#ff9900"
                        ></el-rate>

                        <span class="rating">{{ score.rate }}</span>
                      </span>
                    </div>
                    <p class="cast">
                      <span>导演 : {{ score.directors.join(" / ") }}</span>
                      <span>演员 : {{ score.casts.join(" / ") }}</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a
            href="javascript:;"
            class="more"
            @click.prevent="onload"
            v-show="change"
            >加载更多</a
          >
        </div>
      </el-tab-pane>

      <el-tab-pane name="recent">
        <span slot="label" class="dontclick">
          <i class="el-icon-upload"></i> 近期上映宠物电影
        </span>

        <div class="recent-movie" v-show="!ViewChange">
          <ul class="movie-uls">
            <li
              v-for="(recent, index) in recentmovie"
              :key="index"
              class="movie-lis"
            >
              <a :href="recent.url" target="_blank">
                <div class="colum-box">
                  <img :src="recent.cover" alt="图片丢失" />
                  <span class="span-title">
                    {{ recent.title }}
                    <span class="span-rate">{{ recent.rate }}</span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
          <a
            href="javascript:;"
            class="more"
            @click.prevent="onload"
            v-show="change"
            >加载更多</a
          >
        </div>

        <div class="recent-movie" v-show="ViewChange">
          <ul class="movie-uls-2">
            <li
              v-for="(recent, index) in recentmovie"
              :key="index"
              class="movie-lis-2"
            >
              <a :href="recent.url" target="_blank">
                <div class="row-box">
                  <img :src="recent.cover" alt="图片丢失" />
                  <div class="text-total">
                    <span class="span-title">{{ recent.title }}</span>
                    <div class="rate">
                      <span class="Allstar">
                        <el-rate
                          v-show="recent.rate"
                          :value="Number((recent.rate / 2).toFixed(1))"
                          disabled
                          text-color="#ff9900"
                        ></el-rate>

                        <span class="rating">{{ recent.rate }}</span>
                      </span>
                    </div>
                    <p class="cast">
                      <span>导演 : {{ recent.directors.join(" / ") }}</span>
                      <span>演员 : {{ recent.casts.join(" / ") }}</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a
            href="javascript:;"
            class="more"
            @click.prevent="onload"
            v-show="change"
            >加载更多</a
          >
        </div>
      </el-tab-pane>
    </el-tabs>
  </article>
</template>

<script>
import PetMovieHead from "@/components/petMovieTotal/PetMovieHead.vue";
import PetMovieDital from "@/components/petMovieTotal/PetMovieDital.vue";
import axios from "axios";
export default {
  name: "petMovie",
  components: { PetMovieHead,PetMovieDital },
  data() {
    return {
      dataR: [],
      hotmovie: [],
      recentmovie: [],
      scoremovie: [],
      signmovie: [],
      activeName: "hot",
      // range: "0,10", //电影评分
      start: { hot: 0, recent: 0, sign: 0, score: 0 }, //展示电影数量
      rLoading: "",
      change: true,
    };
  },
  methods: {
    movie(movie, range, start) {
      return (
        axios.get(
            "/j/new_search_subjects",
            {
              params: {
                tags: "宠物",
                sort: movie,
                range: range,
                start: start,
              },
            },
            (this.change = false),
            (this.rLoading = this.openLoading())
          )
          //请求数据时打开遮罩
          .then(
            (response) => {
              console.log("movie接口请求成功", response);
              this.dataR = response.data.data;
              this.rLoading.close();
              this.change = true;
              if (response == undefined) {
                this.$message({
                  // showClose: true,
                  message: " 抱歉，请求超时！",
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
          )
      );
    },
    
    getId(id){
      this.$store.state.id = id
      console.log('我是电影id',id)
    },
    // 写成同步的axiso请求
    //每点击一次 多加载20条电影数据
    async onload() {
      if (this.activeName == "hot") {
        this.start.hot += 20;
        await this.movie("U", this.changeRange, this.start.hot);
        this.hotmovie.push(...this.dataR);
      } else if (this.activeName == "sign") {
        this.start.sign += 20;
        await this.movie("T", this.changeRange, this.start.sign);
        this.signmovie.push(...this.dataR);
      } else if (this.activeName == "score") {
        this.start.score += 20;
        await this.movie("S", this.changeRange, this.start.score);
        this.scoremovie.push(...this.dataR);
      } else if (this.activeName == "recent") {
        this.start.recent += 20;
        await this.movie("R", this.changeRange, this.start.recent);
        this.recentmovie.push(...this.dataR);
      }
    },
  },
  watch: {
    //因为同步操作先执行 这样永远只能拿到上一次的操作 只能拿到上一次的数据 处理完问题就解决
    activeName: {
      async handler() {
        if (this.activeName == "hot") {
          this.start.hot = 0;
          await this.movie("U", this.changeRange, this.start.hot);
          this.hotmovie = this.dataR;
          console.log("hot触发", this.hotmovie);
        } else if (this.activeName == "sign") {
          this.start.sign = 0;
          await this.movie("T", this.changeRange, this.start.sign);
          this.signmovie = this.dataR;
          console.log("sign触发", this.signmovie);
        } else if (this.activeName == "score") {
          this.start.score = 0;
          await this.movie("S", this.changeRange, this.start.score);
          this.scoremovie = this.dataR;
          console.log("score触发", this.scoremovie);
        } else if (this.activeName == "recent") {
          this.start.recent = 0;
          await this.movie("R", this.changeRange, this.start.recent);
          this.recentmovie = this.dataR;
          console.log("recent触发", this.recentmovie);
        }
      },
      immediate: true,
    },

    //当评分改变时
    async changeRange() {
      if (this.activeName == "hot") {
        this.start.hot = 0;
        await this.movie("U", this.changeRange, this.start.hot);
        this.hotmovie = this.dataR;
        console.log("hot触发", this.hotmovie);
      } else if (this.activeName == "sign") {
        this.start.sign = 0;
        await this.movie("T", this.changeRange, this.start.sign);
        this.signmovie = this.dataR;
        console.log("sign触发", this.signmovie);
      } else if (this.activeName == "score") {
        this.start.score = 0;
        await this.movie("S", this.changeRange, this.start.score);
        this.scoremovie = this.dataR;
        console.log("score触发", this.scoremovie);
      } else if (this.activeName == "recent") {
        this.start.recent = 0;
        await this.movie("R", this.changeRange, this.start.recent);
        this.recentmovie = this.dataR;
        console.log("recent触发", this.recentmovie);
      }
    },
  },
  computed: {
    changeRange() {
      return this.$store.state.mrange;
    },
    ViewChange() {
      return this.$store.state.valueView;
    },
  },
  beforeRouteEnter(to, from, next) {
    axios.defaults.baseURL = "/api",
    console.log("movie路由触发了");
    next();
  },
  // mounted(){
  //   console.log('hahha')
  //   this.test('6873143')
  // }
};
</script>

<style scoped>
.hot-movie,
.recent-movie,
.score-movie,
.sign-movie {
  height: calc(82vh - 141px);
  overflow: auto;
}
.movie-uls .movie-lis a,
.movie-lis-2 .movie-lis-2 a {
  color: black;
}
.movie-uls-2 {
  width: 95%;
  transform: translateX(5%);
}
/* 适配缩小 但是会让居中失效 */
/* .colum-box {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
} */
.row-box {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.row-box .cast {
  display: flex;
  flex-direction: column;
  color: rgba(153, 153, 153);
  font-size: 20px;
}
.row-box .cast span {
  margin-bottom: 5px;
  margin-top: 15px;
}
.row-box .text-total {
  margin-left: 50px;
  margin-top: 25px;
}
.movie-lis {
  display: inline-block;
  text-align: center;
  vertical-align: top;
  /* 图片向上对齐 */
  width: 25%;
  margin-bottom: 15px;
}
.movie-lis:nth-of-type(-n + 4) {
  margin-top: 30px;
}
.movie-lis-2 {
  display: flex;
  margin: 30px 0;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.movie-uls-2 .movie-lis-2 .span-title {
  display: inline-block;
  padding-bottom: 15px;
  color: black;
  font-size: 22px;
  font-weight: 700;
}
.movie-uls-2 .movie-lis-2 .span-title:hover {
  text-decoration: underline;
}
.movie-uls .movie-lis .span-title {
  display: inline-block;
  width: 180px;
  line-height: 25px;
  padding-bottom: 15px;
  font-weight: 700;
}
.movie-uls .movie-lis .span-title:hover {
  text-decoration: underline;
}
.movie-lis img {
  display: inline-block;
  width: 210px;
  height: 280px;
}
.movie-lis-2 img {
  display: inline-block;
  width: 170px;
  height: 230px;
}

.span-rate {
  display: inline-block;
  color: rgba(255, 172, 45);
  font-weight: 700;
  transform: translateX(8px);
}
.rating {
  color: rgba(255, 172, 45);
  font-weight: 700;
  padding-left: 5px;
}
/* 样式穿透 */
::v-deep .el-rate__icon {
  font-size: 20px;
}

.rate .Allstar {
  display: flex;
  align-items: center;
}
.more {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80%;
  border-radius: 2px;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  font-weight: 700;
  background: #f7f7f7;
  text-decoration: none;
  color: #258dcd;
}
</style>