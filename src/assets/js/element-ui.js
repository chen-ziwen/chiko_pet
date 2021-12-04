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
    CarouselItem
}  from 'element-ui'

Vue.component(Table.name, Table) //配置全局组件
Vue.component(Row.name, Row)
Vue.component(Button.name, Button)
Vue.component(form.name, form)
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