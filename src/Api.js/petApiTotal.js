import axios from "axios";
export function movie(movie, range, start) {
    return axios.get("/j/new_search_subjects", {
      params: {
        tags: "宠物",
        sort: movie,
        range: range,
        start: start,
      },

    },
      this.change = false,
      this.rLoading = this.openLoading())
      //请求数据时打开遮罩
      .then(
        (response) => {
          console.log("movie接口请求成功", response);
          this.dataR = response.data.data;
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
  }