<template>
  <div class="goodlist">
    <router-link :to="'/home/goodinfo/'+item.id" class="gooditem" v-for="item in goodlist" :key="item.id">
      <img :src="item.img_url" alt="">
      <h1>{{item.zhaiyao}}</h1>
      <div class="info">
        <p>
          <span class="now">¥{{item.sell_price}}</span>
          <span class="old">¥{{item.market_price}}</span>
        </p>
        <p class="price">
          <span>热卖中</span>
          <span>剩余{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>
    <van-button plain type="danger" size="large" @click="getMore">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageindex: 1,
    goodlist: []
  }),
  created(){
    this.getgoods()
  },
  methods:{
    async getgoods() {
      const {data:{status,message}} = await this.$http.get(`api/getgoods?pageindex=${this.pageindex}`)
      console.log(message)
      if(status === 0) {
        this.goodlist = this.goodlist.concat(message)
      }
    },
    async getMore() {
      this.pageindex++
      this.getgoods()
    }
  }
};
</script>

<style lang="less" scoped>
  .goodlist {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .gooditem {
      width: 48%;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2px;
      margin-bottom: 3px;
      img {
        width: 100%;
      }
      h1 {
        font-size: 15px
      }
      .info {
        background-color: #ccc;
        p {
          margin: 0;
          padding: 5px
        }
        .now {
          color: red;
          font-size: 16px;
          font-weight: 700;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
          color: rgb(107, 104, 104)
        }
        .price {
          display: flex;
          justify-content: space-between;
          color: rgb(107, 104, 104)
        }
      }
    }
  }
</style>