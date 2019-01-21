<template>
  <div>
    <van-tabs @click="getimages" v-model="active">
      <van-tab v-for="item in list" :key="item.id" :title="item.title" v-model="item.id"></van-tab>
    </van-tabs>
    <router-link v-for="image in conList" :key="image.id" :to="'/home/photoInfo/'+image.id">
      <img v-lazy="image.img_url">
    </router-link>
  </div>
</template>

<script>
// 引入
import { Toast } from "vant";
export default {
  data: () => ({
    list: [], // tab栏数据
    conList: [], // 图片数据
    active: 0 // 默认索引值
  }),
  created() {
    // 页面加载时渲染
    this.getimgcategory();
    
    this.getimages(this.active);
  },
  methods: {
    // 获取tab栏的数据
    async getimgcategory() {
      const {
        data: { status, message }
      } = await this.$http.get("api/getimgcategory");
      if (status === 0) {
        // 手动添加 一个全部分类
        message.unshift({ id: 0, title: "全部" });
        this.list = message;
      } else {
        Toast("获取图片信息失败");
      }
    },

    // 获取图片数据
    async getimages(index, title) {
      const {
        data: { status, message }
      } = await this.$http.get("api/getimages/" + index);
      if (status === 0) {
        this.conList = message;
      }
    }
  }
};
</script>

<style  scoped>
</style>