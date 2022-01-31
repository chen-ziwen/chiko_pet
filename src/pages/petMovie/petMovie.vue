<template>
  <div class="movie">
    <meta name="referrer" content="no-referrer" />
    <!-- 显示https图片加上上面一行 -->
    <PmsgHeader title="宠物电影" place="搜索宠物电影"></PmsgHeader>

    <div class="movie-total">
      <el-tabs type="border-card" v-model="activeName" 
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
        <el-tab-pane name="hot">
          <span slot="label" class="dontclick">
            <i class="el-icon-sunny"></i> 近期热门宠物电影
          </span>

          <div class="hot-movie">
            <!-- <h1>我是近期热门宠物电影</h1> -->
            <ul class="movie-uls">
              <li v-for="(hot, index) in hotmovie" :key="index" class="movie-lis">
                <img :src="hot.cover" alt="图片丢失" />
                <span class="span-title">
                  {{ hot.title }}
                  <span class="span-rate">{{ hot.rate }}</span>
                </span>
              </li>
            </ul>
            <a href="javascript:;" class="more" @click.prevent="onload" >加载更多</a>
          </div>
        </el-tab-pane>

        <el-tab-pane name="sign">
          <span slot="label" class="dontclick">
            <i class="el-icon-star-on"></i> 标记最多宠物电影
          </span>
          <div class="sign-movie">
            <!-- <h1>我是标记最多宠物电影</h1> -->
            <ul class="movie-uls">
              <li v-for="(sign, index) in signmovie" :key="index" class="movie-lis">
                <img :src="sign.cover" alt="图片丢失" />
                <span class="span-title">
                  {{ sign.title }}
                  <span class="span-rate">{{ sign.rate }}</span>
                </span>
              </li>
            </ul>
            <a href="javascript:;" class="more" @click.prevent="onload">加载更多</a>
          </div>
        </el-tab-pane>

        <el-tab-pane name="score">
          <span slot="label" class="dontclick">
            <i class="el-icon-medal-1"></i> 评分最高宠物电影
          </span>
          <div class="score-movie">
            <!-- <h1>我是评分最高宠物电影</h1> -->
            <ul class="movie-uls">
              <li v-for="(score, index) in scoremovie" :key="index" class="movie-lis">
                <img :src="score.cover" alt="图片丢失" />
                <span class="span-title">
                  {{ score.title }}
                  <span class="span-rate">{{ score.rate }}</span>
                </span>
              </li>
            </ul>
            <a href="javascript:;" class="more" @click.prevent="onload">加载更多</a>
          </div>
        </el-tab-pane>

        <el-tab-pane name="recent">
          <span slot="label" class="dontclick">
            <i class="el-icon-upload"></i> 近期上映宠物电影
          </span>
          <div class="recent-movie">
            <!-- <h1>我是近期上映宠物电影</h1> -->
            <ul class="movie-uls">
              <li v-for="(recent, index) in recentmovie" :key="index" class="movie-lis">
                <img :src="recent.cover" alt="图片丢失" />
                <span class="span-title">
                  {{ recent.title }}
                  <span class="span-rate">{{ recent.rate }}</span>
                </span>
              </li>
            </ul>
            <a href="javascript:;" class="more" @click.prevent="onload">加载更多</a>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import PmsgHeader from "@/components/petMsgTotal/PmsgHeader.vue";
import axios from "axios";
export default {
  name: "petMovie",
  components: { PmsgHeader },
  data() {
    return {
      dataR: [],
      hotmovie: [],
      recentmovie: [],
      scoremovie: [],
      signmovie: [],
      activeName: "hot",
      range: "0,10", //电影评分
      start: { hot: 0, recent: 0, sign: 0, score: 0 }, //展示电影数量
      rLoading : ''
    };
  },
  methods: {
    movie(movie, range, start) {
      return axios.get("/j/new_search_subjects", {
          params: {
            tags: "宠物",
            sort: movie,
            range: range,
            start: start,
          },
          
        },
        this.rLoading = this.openLoading())
        //请求数据时打开遮罩
        .then(
        
          (response) => {
            console.log("movie接口请求成功", response.data.data);
            this.dataR = response.data.data;
            this.rLoading.close()
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
            //杜宾、贵宾、哈士奇、苏格兰折耳猫、卡斯罗犬、大丹犬、暹罗猫、阿拉斯加雪橇犬、美国可卡犬、金毛犬、布偶猫
            //请求成功后更新List的数据
          },
          (error) => {
            console.log("请求失败了", error.response);
            //请求后更新List的数据
          }
        );
    },

    //加载更多按钮

    //先触发再接收 明天改一下 每个判断里都得拿到最新的数据
    async onload() {
      if (this.activeName == "hot") {
        this.start.hot += 20;
        await this.movie("U", this.range, this.start.hot);
        this.hotmovie.push(...this.dataR);
      } else if (this.activeName == "sign") {
        this.start.sign += 20;
        await this.movie("T", this.range, this.start.sign);
        this.signmovie.push(...this.dataR);
        // this.movie(this.range)
      } else if (this.activeName == "score") {
        this.start.score += 20;
        await this.movie("S", this.range, this.start.score);
        this.scoremovie.push(...this.dataR);
        // this.movie(this.range)
      } else if (this.activeName == "recent") {
        this.start.recent += 20;
        await this.movie("R", this.range, this.start.recent);
        this.recentmovie.push(...this.dataR);
        // this.movie(this.range)
      }
      // });
    },
  },
  watch: {
    //因为同步操作先执行 这样永远只能拿到上一次的操作 只能拿到上一次的数据 处理完问题就解决
    activeName: {
      async handler() {
        if (this.activeName == "hot") {
          this.start.hot = 0;
          await this.movie("U", this.range, this.start.hot);
          this.hotmovie = this.dataR;
          console.log("hot触发", this.hotmovie);
        } else if (this.activeName == "sign") {
          this.start.sign = 0;
          await this.movie("T", this.range, this.start.sign);
          this.signmovie = this.dataR;
          console.log("sign触发", this.signmovie);
        } else if (this.activeName == "score") {
          this.start.score = 0;
          await this.movie("S", this.range, this.start.score);
          this.scoremovie = this.dataR;
          console.log("score触发", this.scoremovie);
        } else if (this.activeName == "recent") {
          this.start.recent = 0;
          await this.movie("R", this.range, this.start.recent);
          this.recentmovie = this.dataR;
          console.log("recent触发", this.recentmovie);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.movie-total {
  height: calc(82vh - 70px);
}
.hot-movie,
.recent-movie,
.score-movie,
.sign-movie {
  height: calc(70vh - 41px);
  overflow: auto;
}
.movie-lis {
  display: inline-block;
  text-align: center;
  vertical-align: top; 
   /* 图片向上对齐 */
  width: 25%;
}
.movie-lis img {
  display: inline-block;
  width: 220px;
  height: 280px;
}
.span-title {
  display: inline-block;
  width: 220px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 15px;
}
.span-rate {
  display: inline-block;
  color: rgba(255, 172, 45);
  transform: translateX(8px);
}
.more {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
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