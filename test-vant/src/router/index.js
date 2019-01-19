import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/tabbar/Home'
import search from '@/components/tabbar/Search'
import cart from '@/components/tabbar/Cart'
import member from '@/components/tabbar/Member'
import newList from '../components/news/NewList'
import share from '../components/class/share'
import buy from '../components/class/Buy'
import feedback from '../components/class/Feedback'
import video from '../components/class/Video'
import contact from '../components/class/Contact'
import newsInfo from '../components/news/NewsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/search', component: search },
    { path: '/cart', component: cart },
    { path: '/member', component: member },
    { path: '/home/newList', component: newList },
    { path: '/home/share', component: share },
    { path: '/home/buy', component: buy },
    { path: '/home/feedback', component: feedback },
    { path: '/home/video', component: video },
    { path: '/home/contact', component: contact },
    { path: '/home/newsInfo/:id', component: newsInfo },
  ]
})
