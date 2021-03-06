import Vue from 'vue'
// 1.引入路由
import Router from 'vue-router'
// 2.注册路由
Vue.use(Router)

// 3.挂载子组件
import home from '@/components/tabbar/Home'
import search from '@/components/tabbar/Search'
import cart from '@/components/tabbar/Cart'
import member from '@/components/tabbar/Member'
import newList from '../components/news/NewList'
import share from '../components/photo/share'
import goodlist from '../components/goods/Goodlist'
import feedback from '../components/class/Feedback'
import video from '../components/class/Video'
import contact from '../components/class/Contact'
import newsInfo from '../components/news/NewsInfo'
import photoInfo from '../components/photo/Photoinfo'
import goodinfo from '../components/goods/goodinfo'

// 4.实例化路由 并暴露
export default new Router({
  // 5.配置路由规则
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/search', component: search },
    { path: '/cart', component: cart },
    { path: '/member', component: member },
    { path: '/home/newList', component: newList },
    { path: '/home/share', component: share },
    { path: '/home/goodlist', component: goodlist },
    { path: '/home/feedback', component: feedback },
    { path: '/home/video', component: video },
    { path: '/home/contact', component: contact },
    { path: '/home/newsInfo/:id', component: newsInfo },
    { path: '/home/photoInfo/:id', component: photoInfo },
    
    // { path: '/home/goodinfo/:id', component: goodinfo },
    // 编程导航 name + params
    { name:'goodinfo', path: '/home/goodinfo/:id', component: goodinfo }
    // path + query ???
    // { path: '/home/goodinfo', component: goodinfo },

  ]
})
