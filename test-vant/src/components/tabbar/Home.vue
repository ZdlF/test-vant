<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>

    <gird></gird>

  </div>
</template>

<script>

import gird from '../subcom/Gird'

export default {
  data: () => ({
    lunbotuList: []
  }),
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //  vue-resource 写法
      this.$http.get("http://localhost:5000/api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.lunbotuList = result.body.message;
        }
      });

      // axios 写法
      // this.axios.get('http://localhost:5000/api/getlunbo')
      // .then(result => {
      //   // console.log(result)
      //   if(result.data.status === 0) {
      //     this.lunbotuList = result.data.message
      //   }
      //  })
    }
  },
  components: {
    gird
  }
};
</script>

<style lang="less" scoped>
.home {
  .van-swipe {
    height: 200px;
    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

}
</style>