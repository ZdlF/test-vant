<template>
  <div class="newList">
    <router-link v-for="item in newList" :key="item.id" :to="'/home/newsInfo/' + item.id">
      <van-card
        :desc="item.add_time | getDate('YYYY-MM-DD')"
        :title="item.title"
        :thumb="item.img_url"
      >
        <div slot="footer">
          <van-button size="mini">点击次数: {{item.click}}</van-button>
        </div>
      </van-card>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    newList: []
  }),
  created() {
    this.getNewList();
  },
  methods: {
    async getNewList() {
      const result = await this.$http.get("api/getnewslist");
      if (result.data.status == 0) {
        this.newList = result.data.message;
      }
    }
  }
};
</script>

<style lang="less">
.newList {
  .van-card__header {
    height: 40px;
    .van-card__thumb {
      width: 45px;
      height: 45px;
      img {
        width: 45px;
        margin-top: 4px;
      }
    }
  }
  .van-button {
    position: absolute;
    right: 0;
    top: 22px;
    width: auto;
  }
}
</style>