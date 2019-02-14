<template>
  <div id="app">
    <!-- <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-button plain>plain</mt-button>  -->
    <!-- 7.渲染路由 -->
    <router-link to="/login">login</router-link>
    <router-link to="/register">register</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* 设置全局样式 */
</style>
