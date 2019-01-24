<template>
  <div class="goodlist">
    <!-- 1.使用链接跳转 -->
    <!-- <router-link :to="'/home/goodinfo/'+item.id" class="gooditem" v-for="item in goodlist" :key="item.id">
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
    </router-link>-->
    <!-- 2.使用$router导航对象进行跳转 编程导航-->
    <div class="gooditem" v-for="item in goodlist" :key="item.id" @click="toinfo(item.id)">
      <img :src="item.img_url" alt>
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
    </div>

    <van-button plain type="danger" size="large" @click="getMore">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageindex: 1,
    goodlist: []
  }),
  created() {
    this.getgoods();
  },
  methods: {
    async getgoods() {
      const {
        data: { status, message }
      } = await this.$http.get(`api/getgoods?pageindex=${this.pageindex}`);
      // console.log(message)
      if (status === 0) {
        this.goodlist = this.goodlist.concat(message);
      }
    },
    // 加载更多
    async getMore() {
      this.pageindex++;
      this.getgoods();
    },
    // 编程导航
    toinfo(id) {
      //  $route  参数列表获取   $route.params.id   $route.query.id
      //  $router 导航列表获取   $router.push  做导航的跳转

      // 1.直接拼接参数 推荐使用
      // this.$router.push('/home/goodinfo/'+id)
      // this.$router.push('/home/goodinfo?id='+id)

      // 2.传递对象
      // this.$router.push({path:'/home/goodinfo/'+id})

      // 3.传递命名路由 需要在路由规则中配置name  name + params 推荐使用
      this.$router.push({ name: "goodinfo", params: { id } });

      // 4. path + query    ???
      // this.$router.push({path:'/home/goodinfo/', query:{id}})
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
      font-size: 15px;
    }
    .info {
      background-color: #ccc;
      p {
        margin: 0;
        padding: 5px;
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
        color: rgb(107, 104, 104);
      }
      .price {
        display: flex;
        justify-content: space-between;
        color: rgb(107, 104, 104);
      }
    }
  }
}
</style>