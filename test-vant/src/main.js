import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入方式
import { Button, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem } from 'vant'
Vue.use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)

// 引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 使用axios
// import axios from 'axios'
// axios 不能直接挂载到Vue上 通过原型挂载
// Vue.prototype.axios = axios


// 引入 animate
import aminate from 'animate.css/animate.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
