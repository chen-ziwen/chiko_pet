import Vue from "vue";
import {
    Table,
    Row,
    Button,
    form,
    TableColumn,
    FormItem,
    Input,
    Icon,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    TabPane,
    Tabs,
    Carousel,
    CarouselItem,
    Message,
    MessageBox,
    ColorPicker,
    Dialog,
    ButtonGroup,
    Empty,
    Loading,
    Slider,
    Switch,
    Rate,
    Pagination,
    Select,
    Option
}  from 'element-ui'

Vue.component(Table.name, Table) //配置全局组件
Vue.component(Row.name, Row)
Vue.component(Button.name, Button)
Vue.component(form.name, form)
// Vue.component(Message.name,Message)

Vue.use(TableColumn)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(Icon)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(DropdownItem)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(ColorPicker)
Vue.use(Dialog)
Vue.use(ButtonGroup)
Vue.use(Empty)
Vue.use(Loading)
Vue.use(Slider)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

Vue.prototype.openLoading = function() {
    const loading = this.$loading({           // 声明一个loading对象
      lock: true,                             // 是否锁屏
      text: '正在加载...',                     // 加载动画的文字
      spinner: 'el-icon-loading',             // 引入的loading图标
      background: 'rgba(0, 0, 0, 0.5)',       // 背景颜色
      target: '.eltabs',                    // 需要遮罩的区域
      body: true,                                              
    })
    setTimeout(function () {                  // 设定定时器，超时5S后自动关闭遮罩层，避免请求失败时，遮罩层一直存在的问题
      loading.close();                        // 关闭遮罩层
    },3000)
    return loading;
  }