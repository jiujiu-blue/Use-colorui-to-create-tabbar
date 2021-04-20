import Vue from 'vue'
import App from './App'
//载入组件
import tabbar from "pages/components/tabbar.vue";
Vue.component("tabbar", tabbar);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
