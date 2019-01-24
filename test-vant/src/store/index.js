// yarn add vuex -S 装包
import vue from 'vue'
// 1. 引入vuex
import vuex from 'vuex'
// 2. 注册vuex
vue.use(vuex)

//  取出存在本地存储中的购物车数据 
var cart = JSON.parse(localStorage.getItem('cart') || '[]')

// 3. 实例化  并暴露
export default new vuex.Store({
  // 4. 配置对象
  state: {   // 类似于data  但是可以全局使用
    // 使用 this.$store.state.count
    // count: 1
    cart
  },
  mutations: {  // 类似于 methods
    // 调用这里面的方法时 需要 this.$store.commit('方法名')
    // add(state) {
    //   state.count++
    // },
    // sub(state) {
    //   state.count--
    // }

    addCart(state,goodinfo) {

      // 假设 购物车里没有这件添加的商品
      var flag = false
      // console.log(typeof state.cart)
      // 如果 有 的话， 就只让其数量+1
      state.cart.some(item => {
        if(item.id == goodinfo.id) {
          console.log(item.count)
          item.count += parseInt(goodinfo.count)
          // 防止继续添加
          flag = true
          // 中断循环
          return true
        }
      })
      //  如果 商购物车里没有这件添加的品 就添加进去
      if(!flag) {
        state.cart.push(goodinfo)
      }
      localStorage.setItem('cart',JSON.stringify(state.cart))

    }
  },
  getters: {
    proCount(state){
      let c = 0
      state.cart.forEach(item => {
        c += item.count
      })
      return c
    }
  }
})

