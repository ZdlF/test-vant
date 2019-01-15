import Vue from 'vue'
// 1. 引入路由
import VueRouter from 'vue-router'
// 3.引入定义好的组件
import login from '../components/Login'
import register from '../components/Register'

// 2.注册路由
Vue.use(VueRouter)

// 4. 实例化路由 并暴露
export default new VueRouter({
  // 5. 定义路由规则
  routes:[
    {
      path: '/login',
      component: login
    },
    {
      path:'/register',
      component: register
    }
  ]
})