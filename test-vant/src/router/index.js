import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/tabbar/Home'
import search from '@/components/tabbar/Search'
import cart from '@/components/tabbar/Cart'
import member from '@/components/tabbar/Member'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/search', component: search },
    { path: '/cart', component: cart },
    { path: '/member', component: member },
  ]
})
