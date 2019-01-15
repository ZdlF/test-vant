<template>
  <div class="app">
    <!-- 头部 -->
    <van-nav-bar title="长沙黑马13期Vue项目" fixed left-text="返回" left-arrow/>


    <!-- 底部 -->
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
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

<style lang="less">
.app {
  padding: 46px 0 50px 0;

}
</style>
