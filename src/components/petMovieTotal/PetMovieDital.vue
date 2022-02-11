<template>
<article v-show="!this.$store.state.details">
<el-button size="small" icon="el-icon-arrow-left" @click="prev()">
返回上一级</el-button>
  <section class="movie-detail" >
  <section class="movie-detai-section">
    
    <h1 class="title-span">
      <span >{{ details.data[0].name }}</span>
      <span v-show="details.year">({{ details.year }})</span>
    </h1>
    <section class="movie-detail-deep">
      <img :src="details.data[0].poster" alt="图片已丢失" class="movie-img" />
      <div class="movie-introdue">
        <ul>
          <li><span>导演: </span> <span>{{dataReslove(details.director)}}</span></li>
           <li><span>编剧: </span> <span>{{dataReslove(details.writer)}}</span></li>
            <li><span>主演: </span> <span>{{dataReslove(details.actor)}}</span></li>
             <li><span>类型: </span> <span>{{details.data[0].genre}}</span></li>
              <li><span>制片国家/地区: </span> <span>{{details.data[0].country}}</span></li>
               <li><span>语言: </span> <span>{{details.data[0].language}}</span></li>
                <li><span>上映日期: </span> <span>{{details.dateReleased}}</span></li>
                <li><span>片长: </span> <span>{{details.duration/60}}分钟</span></li>
                 <li><span>又名: </span> <span>{{details.alias}}</span></li>
        </ul>
      </div>
    </section>
    <!-- 我是电影详情 -->
     <footer class="footer">
        <p>{{details.data[0].name}}剧情简介······</p>
       <span>{{ details.data[0].description }}</span>
        <a
            :href="this.$store.state.url" target="_blank"
            class="more"
            >查看更多详细信息</a
          >
     </footer>
    </section>
  </section>
  </article>
</template>

<script>
import axios from "axios";
export default {
  name: 'PetMovieDital',
  data() {
    return {
      details: {
        data: [{
          country: "美国",
          createdAt: 1608101103141,
          description: "影片以汪星人的视角展现狗狗和人类的微妙情感，一只狗狗陪伴小主人长大成人，甚至为他追到了女朋友，后来它年迈死去又转世投胎变成其他性别和类型的汪，第二次轮回狗狗变成了警犬威风凛凛，再次转轮回，又成了陪伴一...",
          genre: "剧情/喜剧/家庭",
          id: "5fd9acef3c92a34da0510c7f",
          lang: "Cn",
          language: "英语",
          movie: "5fd9aceb3c92a34da0510c7b",
          name: "一条狗的使命",
          poster: '',
          updatedAt: '',
        }],
        director:[{data:[{name:'陈子文'}]}],
        writer:[{data:[{name:'陈子文'}]}],
        actor:[{data:[{name:'陈子文'}]}],
        year:'2022'
      }
    }
  },
  methods: {
    test(id) {
      return (
        axios.get(
          //这个接口来自github 可以请求 但是被限制 间隔30秒可以成功申请一次 一天限制100次
          'https://movie.querydata.org/api',
          // 'https://api.wmdb.tv/movie/api',
          {
            params: {
              id: id

            },
          },
          (this.change = false),
          (this.rLoading = this.openLoading())
        )
          //请求数据时打开遮罩
          .then(
            (response) => {
              console.log("test接口请求成功", response);
              this.details = response.data;
              this.$store.state.details = false;
              this.rLoading.close();
              this.change = true;
              if(response!=undefined) {
                this.$message({
                  message: " 已为您找到如下信息！",
                  type: "success",
                  duration: 2000,
                  showClose: true,
                });
                }
            },
            (error) => {
              console.log("请求失败了", error.response);
              this.$message({
                  message: " 抱歉,接口请求次数过于频繁,请稍候尝试！",
                  type: "warning",
                  duration: 3000,
                  showClose: true,
                });
              //请求后更新List的数据
            }
          )
      );
    },
    img(doubanId){
      return axios.get(
         'https://api.wmdb.tv/movie/api/generateimage',
         {
           params:{
             doubanId:doubanId,
             lang :'Cn'
           }
         }).then((response)=>{
            console.log("img接口请求成功", response);
         })
    },
    prev(){
      this.$store.state.details = true
    },

    //处理接口中导演,编剧,演员的数据
    dataReslove(msg){
    let data=[];
    let datastr;
    msg.forEach(x => {
     data.push(x.data[0].name)
     datastr = data.join(' / ')
    });
    if(data.length>0) {
      return datastr
    }
    else {
      return '~~ 亲,数据丢失了哈'
    }
     
    },
  },
  watch: {
    '$store.state.id': {
      async handler() {
        this.test(this.$store.state.id);
      }
    }
  }


}
</script>

<style scoped>
.movie-detail {
  height: calc(82vh - 102px);
  background-color: white;
  overflow: auto;
}
.movie-detai-section{
 font-size:18px;
 font-weight:700;
 position:relative;
  left:50%;
  display:block;
  width:80%;
  transform: translateX(-50%);
  letter-spacing:2px;
}
.movie-img {
  display: inline-block;
  width: 310px;
  height: 400px;
}
.movie-detail-deep {
  display:flex;
}
.movie-introdue {
  margin-left:30px;
}
.movie-introdue ul li {
 padding-bottom: 15px;
}

.title-span {
  font:normal  700 30px '黑体';
  text-align:center;
}
.footer p {
  text-align: center;
  margin:30px 0px;
  color:rgba(0,119,34);
  font-size: 28px;
  font-weight:700;
}
.footer span {
  padding-bottom: 50px;
}

.title-span:nth-child(1) {
  margin:30px 0px;
  font-size:30px;
  color:rgba(73,73,73)
}
.title-span:nth-child(2) {
  color:rgba(136,136,136)
}
ul li span:nth-child(1){
  color:rgba(102,102,102)
}
.more {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 35px 0px 10px 0px;
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