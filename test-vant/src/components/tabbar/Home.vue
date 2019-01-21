<template>
  <div class="home">
    <swiper :lunbotuList="lunbotuList"></swiper>
    <gird></gird>

  </div>
</template>

<script>

import gird from '../subcom/Gird'
import swiper from '../subcom/Swiper'
export default {
  data: () => ({
    lunbotuList: []
  }),
  created() {
    this.getLunbotu();
  },
  methods: {
    
    // es7 写法 async await
    async getLunbotu() {
      //  vue-resource 写法
      // this.$http.get("http://localhost:5000/api/getlunbo").then(result => {
      //   if (result.body.status === 0) {
      //     this.lunbotuList = result.body.message;
      //   }
      // });

      const result = await this.$http.get("api/getlunbo")
      if (result.status === 200) {
        this.lunbotuList = result.data.message
      }
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
    gird,
    swiper
  }
};
</script>

<style lang="less">
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