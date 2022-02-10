<template>
  <!-- tabs-pane有具名插槽和默认插槽，默认插槽显示的内容在导航栏下面，
    具名插槽名字叫label 显示的内容在导航栏每个选项的内部 -->

  <el-tabs type="border-card">
    <el-tab-pane class="eltab">
      <!-- 这个插槽写法为新的写法 -->
      <template v-slot:label>
        <span class="dontclick"><i class="el-icon-circle-plus"></i> 记录你的故事</span>
      </template>

      <div class="record">
        <quill-editor class="editor" ref="myQuillEditor" v-model="content.story" :options="editorOption"
          @focus.once="onEditorFocus($event)" />
        <el-button :style='{borderColor:changeColor}' type="text" @click="appear($event)" id="tijao">保 存 你 与 宠 物 的 故 事
        </el-button>
      </div>
    </el-tab-pane>

    <el-tab-pane>
      <span slot="label" class="dontclick"><i class="el-icon-star-on"></i> 查看你的故事</span>

      <div class="check">
        <!-- 显示查看故事模块的内容 -->
        <div class="petContent" v-if="panduan">
          <el-button size="small" icon="el-icon-arrow-left" @click="prev()">
            返回上一级</el-button>
          <div class="ql-snow">
            <div class="ql-editor">
              <div class="petContentSide" ref="petCheck"></div>
            </div>
          </div>
        </div>
   
        <ul class="petshowul" v-else>
          <!-- 通过v-for来渲染页面，绑定点击事件，同时把index索引值作为参数传过去 -->

          <!-- 如果故事为空的话显示下面的内容 -->
          <el-empty description="还 未 添 加 故 事 , 请 添 加 故 事 后 再 来 查 看 !" v-if="empty" :image-size="300">
          </el-empty>

          <!-- 如果不为空显示轮播图 -->
          <el-carousel :interval="2000" trigger="click" height="280px" v-else>
            <el-carousel-item v-for="(img, index) in imgList" :key="index">
              <img :src="img.url" alt=" 图片已丢失" class="imglist" />
            </el-carousel-item>
          </el-carousel>

          <li class="petshowlis" v-for="(petV,index) in this.petValue" :key="petV.pkey" @click="showStory(index)"
            :style="{border:`2px solid ${changeColor}`}">
            {{ petV.value }}
            <el-button size="small" type="danger" icon="el-icon-delete" id="delbtn" @click.stop="delStory(index)">
            </el-button>
          </li>
        </ul>
      </div>
    </el-tab-pane>

    <el-tab-pane>
      <span slot="label" class="dontclick"><i class="el-icon-s-promotion"></i> 分享你的故事</span>
      <div class="share">
        <h1>分享你的故事，好呗</h1>
        {{move.id}}
        {{move.title}}
      </div>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
  import "quill/dist/quill.core.css"; // import styles
  import "quill/dist/quill.snow.css"; // for snow theme
  import "quill/dist/quill.bubble.css"; // for bubble theme
  import quillEditor from "vue-quill-editor";


  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
    ["blockquote", "code-block"], // 引用  代码块-----['blockquote', 'code-block']
    [{
        header: 1,
      },
      {
        header: 2,
      },
    ], // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
    [{
        list: "ordered",
      },
      {
        list: "bullet",
      },
    ], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
    [{
        script: "sub",
      },
      {
        script: "super",
      },
    ], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
    [{
        indent: "-1",
      },
      {
        indent: "+1",
      },
    ], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
    [{
      direction: "rtl",
    }, ], // 文本方向-----[{'direction': 'rtl'}]
    [{
      size: ["small", false, "large", "huge"],
    }, ], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
    [{
      header: [1, 2, 3, 4, 5, 6, false],
    }, ], // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
    [{
        color: [],
      },
      {
        background: [],
      },
    ], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
    [{
      font: [],
    }, ], // 字体种类-----[{ font: [] }]
    [{
      align: [],
    }, ], // 对齐方式-----[{ align: [] }]
    ["clean"], // 清除文本格式-----['clean']
    ["image" /*"video"*/ ], // 链接、图片、视频-----['link', 'image', 'video']
  ];

  export default {
    name: "pet2",
    components: quillEditor,
    data() {
      return {
        uniqueId: "uniqueId",
        // 富文本编辑器默认内容
        petStory: [],
        petValue: [],
        petMsg: {
          value: '',
          pkey: '',
        },
        panduan: false,
        empty : false,
        content: {
          story: "",
        },

        //富文本编辑器配置
        editorOption: {
          modules: {
            toolbar: toolbarOptions,
          },
          theme: "snow",
          placeholder: "书 写 您 与 宠 物 的 故 事，保 存 的 故 事 可 在 “查看你的故事” 中 查 看",
        },
        imgList: [{
            url: require("../../../assets/a.jpg")
          },
          {
            url: require("../../../assets/b.jpg")
          },
          {
            url: require("../../../assets/c.jpg")
          },
          {
            url: require("../../../assets/e.jpg")
          },
          {
            url: require("../../../assets/f.jpg")
          },

        ],
      };
    },
    methods: {
      //获得焦点
      onEditorFocus() {
        this.content.story = "";
      },

      //当我点击时保存按钮时
      appear() {
        this.$prompt("请为您的故事命名!", "宠物故事", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
          })
          .then(({
            value
          }) => {
            let valuechange = value.replace(/\s+/, '')
            if (value == '') {
              this.$message({
                type: "error",
                message: "故事名不能为空白!",
                duration: 2500,
                showClose: true,
              })
            } else {
              this.$message({
                type: "success",
                message: "保存成功!",
                duration: 2500,
                showClose: true,
              });
            }

            let petStory = JSON.parse(localStorage.getItem("petStory") || "[]");
            let petValue = JSON.parse(localStorage.getItem("petValue") || "[]");
            this.petMsg.value = valuechange;
            this.petMsg.pkey = new Date().getTime();
            petValue.push({
              ...this.petMsg
            });
            petStory.push(this.content.story);
            this.petStory = petStory;
            this.petValue = petValue;
            localStorage.setItem("petStory", JSON.stringify(petStory));
            localStorage.setItem("petValue", JSON.stringify(petValue));
            this.content.story = '';
            "<h1>请书写你的故事，记录下那些你与动物的难忘时光!<h1>";
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "取消保存",
              duration: 2000,
              showClose: true,
            });
          });
      },
      showStory(index) {
        //通过refs获取div 同时把local内部的数据渲染到页面
        this.panduan = !this.panduan;
        // 这个方法的意义就是当dom完成更新后，再执行回调函数
        //当页面加载完，随后往里面插入故事内容
        this.$nextTick(() => {
          this.$refs.petCheck.innerHTML = this.petStory[index];
        });
      },
      prev() {
        this.panduan = !this.panduan;
      },
      //点击删除故事
      delStory(index) {
        this.$confirm("是否删除该故事?", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            showClose: true,
          })
          .then(() => {
            this.petStory.splice(index, 1);
            this.petValue.splice(index, 1);
            //index为当前的数组下标
            // 删除时，把localStorage中的缓存一起删除
            let petStory = JSON.parse(localStorage.getItem("petStory"));
            let petValue = JSON.parse(localStorage.getItem("petValue"));
            petStory.splice(index, 1);
            petValue.splice(index, 1);
            localStorage.setItem("petStory", JSON.stringify(petStory));
            localStorage.setItem("petValue", JSON.stringify(petValue));
            this.$message({
              type: "success",
              message: " 删除成功!",
              duration: 1500,
              showClose: true,
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: " 已取消删除",
              duration: 1500,
              showClose: true,
            });
          });
      },
    },
    computed: {
      move() {
        return this.$route.params
      },

    },
    mounted() {
      let petStory = JSON.parse(localStorage.getItem("petStory"));
      this.petStory = petStory;
      let petValue = JSON.parse(localStorage.getItem("petValue"));
      this.petValue = petValue;
    },
  
    watch: {
       'petValue': {
        deep:true,
        handler(){
           if(this.petValue.length==0) {
             this.empty = true
             console.log(this.petValue)
           }
           else {
              this.empty = false
           }
      }
        }
       
    }
    
  };
</script>

<style>
  .record,
  .check,
  .share {
    height: calc(82vh - 72px);
    background-color: whitesmoke;
  }

  .petshowul {
    width: 100%;
    /* margin: 0 auto; */
    height: 100%;
    overflow: auto;
  }

  .petContent {
    height: auto;
    background: whitesmoke;
  }

  .petContentSide {
    background-color: whitesmoke;
    height: 460px;
    width: 85%;
    margin: 30px auto;
    /* text-align: center; */
    text-indent: 2em;
    text-align: justify;
    overflow: auto;
  }

  span .dontclick {
    user-select: none;
  }

  /* 让标题居中显示 */
  .petContentSide 
  h1:first-of-type,
  h2:first-of-type,
  h3:first-of-type,
  h4:first-of-type,
  h5:first-of-type,
  h6:first-of-type {
    text-align: center;
    padding-right: 50px;
    margin-bottom: 20px;
  }

  .petContentSide p {
    padding-bottom: 20px;
    padding-right: 50px;
  }

  /* 固定图片的大小 */
  .petContentSide img {
    float: left;
    width: 150px;
    height: 100px;
  }

  #delbtn {
    color: #fff;
    background-color: rgba(245, 108, 108, 0.8);

    float: right;
    transform: translate(-25px, 8px);
    /* 左右，上下 */
  }

  .dontclick {
    user-select: none;
  }

  .eltab {
    position: relative;
  }

  #tijao {
    /* margin-left: 70px; */
    position: absolute;
    bottom: -2px;
    outline: none;
    background: none;
    width: 100%;
    height: 60px;
    font-size: 25px;
    font-weight: 700;
    outline: none;
    color: #000;
    border: 3px solid;
    cursor: pointer;
    transition: all 0.8s;
  }

  #tijao:hover {
    transform: translate(0, -2.5px);
    box-shadow: 8px 8px 10px rgba(100, 100, 100, 0.7);
    color: #c93756;
  }

  .ql-size-huge {
    font-size: 32px;
  }

  .petshowlis {
    cursor: pointer;
    width: 99.5%;
    background-color: rgba(245, 222, 179, 0.6);
    text-align: center;
    height: 50px;
    font: normal 700 25px "黑体";
    border: 2px solid brown;
    margin: 0px auto 5px auto;
    overflow: auto;
    user-select: none;
    text-align: center;
    line-height: 50px;
    /* text-indent: 2em; */
  }

  .petshowlis:first-of-type {
    margin-top: 15px;
  }

  .petshowlis:hover {
    background-color: rgba(245, 222, 179, 0.6);
  }

  /* .text {
    font-size: 14px;
  } */

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 480px;
  }

  /* 轮播图样式 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .imglist {
    width: 100%;
    height: 100%;
  }

  /* 富文本编辑框样式 */
  .editor {
    line-height: normal !important;
    height: 55vh;
  }

  .editor img {
    width: 240px;
    height: 150px;
  }

  .ql-snow .ql-tooltip[data-mode="link"]::before {
    content: "请输入链接地址:";
  }

  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: "保存";
    padding-right: 0px;
  }

  .ql-snow .ql-tooltip[data-mode="video"]::before {
    content: "请输入视频地址:";
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: "14px";
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
    content: "10px";
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
    content: "18px";
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
    content: "32px";
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: "文本";
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: "标题1";
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: "标题2";
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: "标题3";
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: "标题4";
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: "标题5";
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: "标题6";
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: "标准字体";
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
    content: "衬线字体";
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
    content: "等宽字体";
  }
</style>