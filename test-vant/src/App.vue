<template>
  <div class="app">
    <!-- 头部 -->
    <van-nav-bar title="栗子我来举" fixed left-text="返回" left-arrow/>


    <transition enter-active-class="bounceInRight" leave-active-class="fadeOutLeft">
      <router-view class="animated"></router-view>
    </transition>


    <!-- 底部 -->
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item to="member" icon="user-o">会员</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    active: 0
  }),
  methods: {}
};
</script>

<style lang="less" scoped>
.app {
  padding: 46px 0 50px 0;
  overflow-x: hidden;
}
// .v-enter {
//   opacity: 0;
//   transform: translateX(100%)
// }
// .v-leave-to {
//   opacity: 0;
//   transform: translateX(-100%);
//   position: absolute;
// }
// .v-enter-active,
// .v-enter-active {
//   transition: all .5s ease
// }

// aminate.css
.v-leave-to {
  // 使离开的组件脱标 不挡着后面的组件进入
  position: absolute;
  // 因为轮播图有两张图片，在离开时需要往左偏移200%
  transform: translate(-200%)
}
</style>
