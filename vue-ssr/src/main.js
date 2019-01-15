import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router' // 会自动到router文件中寻找index.js 文件

// 引入mint-ui
// 全局引入方式
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需引入
import { Button,Spinner } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Spinner.name, Spinner)

// vue 底层优化
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 6. 引入路由 挂载路由
  router,
  render: c => c(App)
})
