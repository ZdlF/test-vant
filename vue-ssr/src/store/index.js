import vue from 'vue'
// a. 引入vuex
import vuex from 'vuex'
// b. 注册vuex
vue.use(vuex)

// c. 实例化vuex.store
export default new vuex.Store({
  // d. 配置规则
  state: {
    count: 1,
    msg: 'hello'
  },
  mutations: {
    add(state) {
      return state.count++
    },
    sub(state) {
      return state.count--
    }
  },
  getters: {
    // msg(state) {
    //   return state.msg
    // }

    // es6
    count: state => state.count,
    msg: state => state.msg
  }
})

