<template>

  <!-- tabs-pane有具名插槽和默认插槽，默认插槽显示的内容在导航栏一下，
    具名插槽名字叫label 显示的内容在导航栏每个选项的内部 -->

  <el-tabs type="border-card">

    <el-tab-pane>
      <span slot="label"><i class="el-icon-circle-plus"></i> 记录你的故事</span>
      <div class="record">
        <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
        <div class="content edit_container">

          <quill-editor class='editor' ref="myQuillEditor" v-model="content.story" :options="editorOption"
            @blur="onEditorBlur($event)" @focus.once="onEditorFocus($event)" @ready="onEditorReady($event)" />
          <!-- 绑定了三个事件，分别是失去焦点事件，获得焦点事件，和准备编辑事件 -->
          <!-- <button v-on:click="saveHtml">保存</button> -->
        </div>
      </div>

    </el-tab-pane>

    <el-tab-pane>
      <span slot="label"><i class="el-icon-star-on"></i> 查看你的故事</span>
      <div class="check">
        <h1>里面会呈现出好多条故事记录，双击即可打开</h1>
      </div>
    </el-tab-pane>

    <el-tab-pane>
      <span slot="label"><i class="el-icon-s-promotion"></i> 分享你的故事</span>
      <div class="share">
        <h1>分享你的故事，好呗</h1>
      </div>
    </el-tab-pane>

  </el-tabs>
</template>

<script>
  import 'quill/dist/quill.core.css' // import styles
  import 'quill/dist/quill.snow.css' // for snow theme
  import 'quill/dist/quill.bubble.css' // for bubble theme
  import quillEditor from 'vue-quill-editor'
 
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
  ["blockquote", "code-block"], // 引用  代码块-----['blockquote', 'code-block']
  [{ header: 1 }, { header: 2 }], // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
  [{ script: "sub" }, { script: "super" }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
  [{ indent: "-1" }, { indent: "+1" }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
  [{ direction: "rtl" }], // 文本方向-----[{'direction': 'rtl'}]
  [{ size: ["small", false, "large", "huge"] }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
  [{ font: [] }], // 字体种类-----[{ font: [] }]
  [{ align: [] }], // 对齐方式-----[{ align: [] }]
  ["clean"], // 清除文本格式-----['clean']
  ["image", "video"] // 链接、图片、视频-----['link', 'image', 'video']
];

  export default {
    name: 'pet2',
    components : quillEditor,
    data() {
      return {
        uniqueId: "uniqueId",
        // 富文本编辑器默认内容
        content: {
          story: '<h2>请书写你的故事，记录下那些你与动物的难忘时光！</h2>'
        },

        //富文本编辑器配置
        editorOption: {
          modules: {
            toolbar: toolbarOptions
          },
          theme: "snow",
          placeholder: "请输入正文"
        }
      }
    },
    computed: {
      //当前富文本实例
      editor() {
        return this.$refs.myQuillEditor.quill;
      }
    },
    methods: {
      //失去焦点事件
      onEditorBlur(quill) {
        console.log('文本失去焦点!', quill)
      },
      //获得焦点事件
      onEditorFocus(quill) {
        console.log('文本获得焦点!', quill)
        this.content.story = ''
      },
      // 准备富文本编辑器
      onEditorReady(quill) {
        console.log('准备文本编辑时!', quill)

      },
      //内容改变事件
      onEditorChange() {

      }
       
    }


  }
</script>

<style>
  .record,
  .check,
  .share {
    height: calc(70vh + 5px);
    background-color: wheat;
    overflow: auto;
  }

  /* 自定义文本框大小 */
  .editor {
    line-height: normal !important;
    height: 380px;
  }

.ql-snow .ql-tooltip[data-mode=link]::before {
  content: "请输入链接地址:";
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: '保存';
    padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode=video]::before {
    content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: '14px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
  content: '10px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
  content: '18px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
  content: '32px';
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: '文本';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: '标题1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: '标题2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: '标题3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: '标题4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: '标题5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: '标题6';
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: '标准字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
  content: '衬线字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
  content: '等宽字体';
}

</style>