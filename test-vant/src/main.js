import Vue from 'vue'
import App from './App'
// 6.1 引入路由 
import router from './router'

// 引入vuex 的 store
import store from './store'

// 按需引入方式
import { Button, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Card, Tab, Tabs, Lazyload, Stepper, SubmitBar } from 'vant'
Vue.use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Card)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)
  .use(Stepper)
  .use(SubmitBar)

// 引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// vue-resource 配置全局根路径
Vue.http.options.root = 'http://127.0.0.1:5000/'
Vue.http.options.emulateJSON = true

// 使用axios
// import axios from 'axios'
// axios 不能直接挂载到Vue上 通过原型挂载
// Vue.prototype.axios = axios
// axios 配置全局根路径
// axios.defaults.baseURl = 'http://127.0.0.1:5000/'


// 引入 animate
import aminate from 'animate.css/animate.css'

// 引入moment 格式化时间
import moment from 'moment'
// 定义全局时间过滤器
Vue.filter('getDate',(dataStr, arg = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dataStr).format(arg)
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 6.2 挂载路由
  router,
  // 挂载 store
  store,
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
