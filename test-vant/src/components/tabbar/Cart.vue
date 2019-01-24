<template>
  <div class="cart">
    <div class="detail" v-for="item in cartList" :key="item.id">
      <van-card
        :num="item.count"
        :price="item.price"
        desc="魅族16天下第一"
        :title="item.title"
        :thumb="item.src"
      />
    </div>
    <div class="SubmitBar">
      <van-submit-bar :price="3050" button-text="提交订单"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cartList: []
  }),
  created() {
    this.getcart();
  },
  methods: {
    getcart() {
      let cartData = JSON.parse(localStorage.getItem("cart"));
      this.cartList = cartData;
      console.log(this.cartList);
    }
  }
};
</script>

<style lang="less">
  .van-submit-bar {
    bottom: 70px;
  }
</style>