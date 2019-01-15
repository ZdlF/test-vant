import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入方式
import { Button, NavBar, Tabbar, TabbarItem } from 'vant'
Vue.use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
