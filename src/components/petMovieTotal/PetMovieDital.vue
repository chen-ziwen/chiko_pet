<template>
  <article class="movie-detail" v-show="!this.$store.state.details">
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
     <footer>
       {{ details.data[0].description }}
     </footer>
    
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
          //这个接口来自github 可以请求 但是被限制 大概间隔20秒可以成功申请一次
          'https://api.wmdb.tv/movie/api',
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
                  message: " 抱歉,今日接口请求次数已达上限！",
                  type: "warning",
                  duration: 3000,
                  showClose: true,
                });
              //请求后更新List的数据
            }
          )
      );
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
        this.test(this.$store.state.id)
      }
    }
  }


}
</script>

<style scoped>
.movie-detail {
  height: calc(82vh - 70px);
  background-color: white;
  overflow: auto;
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
span {
  display:inline-block;
}
.title-span {
  font:normal  700 30px '黑体';
  text-align:center;
}
</style>