<template>
  <div class="goodinfo">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball" ></div>
    </transition>
    <swiper :lunbotuList="lunbotuList"></swiper>
    <div class="content">
      <h2>{{goodList.title}}</h2>
      <hr>
      <div class="price">
        市场价格
        <span class="now">¥{{goodList.sell_price}}</span>
        <span class="old">¥{{goodList.market_price}}</span>
      </div>
      <div class="shop">购买数量 &nbsp;&nbsp;&nbsp;&nbsp;
        <van-stepper v-model="value" integer/>
      </div>
      <div class="btn">
        <van-button size="large" type="warning" :disabled="btnFlag" @click="addshopcar">加入购物车</van-button>
        <van-button size="large" type="danger">立即购买</van-button>
      </div>
    </div>
    <div class="detail">
      <h2>商品参数</h2>
      <hr>
      <div>
        <p>商品货号: {{goodList.goods_no}}</p>
        <p>库存情况: 剩余{{goodList.stock_quantity}}件</p>
        <p>上架时间: {{goodList.add_time}}</p>
      </div>
      <div>
        <van-button type="warning">图文介绍</van-button>
        <van-button type="danger">商品评论</van-button>
      </div>
    </div>
    <div class="dec"></div>
  </div>
</template>

<script>
// 引入轮播图组件
import swiper from "../subcom/Swiper";
export default {
  data: () => ({
    id: "",
    lunbotuList: [],  // 轮播图数据
    goodList: {},  // 商品详情
    value: 1,   // 步进qi默认值
    ballFlag: false, // 控制小球显示隐藏
    btnFlag: false,
    Xrect: null,
    Yrect: null
  }),
  created() {
    this.id = this.$route.params.id
    this.getthumimages()
    this.getinfo()
  },
  methods: {
    // 获取轮播图片数据
    async getthumimages() {
      // 后台没写 +100
      let idd = parseInt(this.id) + 100
      const {
        data: { status, message }
      } = await this.$http.get("api/getthumimages/" + idd)
      if (status === 0) {
        this.lunbotuList = message
      }
    },
    // 商品详情
    async getinfo() {
      const {
        data: { status, message }
      } = await this.$http.get("api/goods/getinfo/" + this.id)
      if(status === 0){
        this.goodList = message
      }
    },
    // 半场动画钩子函数
    beforeEnter(el) {
      el.style.transform = "translate(0,0)"
    },
    enter(el, done) {
      //  在动画时 调用addcar  计算滚屏之后小球该移动的距离
      this.addcar()
      el.offsetTop;
      el.style.transform = `translate(${this.Xrect}px, ${this.Yrect}px)`
      el.style.transition = "all .5s cubic-bezier(.47,-0.57,.88,.74)"
      done()
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag
    },
    // 进行动画
    addshopcar() {
      this.ballFlag = !this.ballFlag
      this.btnFlag = true
      setTimeout(() => {
        this.btnFlag = false
      },600)
    },
    // 在屏幕滚动后 小球位置会发生改变，这时候在动画中写的死距离就用不了了，所以需要计算出小球移动后的位置
    //  在计算出徽标的位置 ，用徽标位置减去小球位置得出移动的距离 写入动画中
    addcar() {
      let info = document.querySelector('.van-info')
      this.Xrect = info.getBoundingClientRect().left - this.$refs.ball.getBoundingClientRect().left
      this.Yrect = info.getBoundingClientRect().top - this.$refs.ball.getBoundingClientRect().top
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="less">
.goodinfo {
  padding: 5px;
  color: rgb(73, 72, 72);
  .ball {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    left: 148px;
    top: 414px;
    z-index: 99;
    // transform: translate(113px, 489px)
  }
  .van-swipe {
    text-align: center;
    padding: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #ccc;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .content {
    padding: 5px;
    border: 1px solid #ccc;
    background-color: #eee;
    box-shadow: 0 0 10px #ccc;
    margin: 10px 0;
    h2 {
      text-align: center;
    }
    .price {
      .now {
        font-size: 20px;
        color: red;
        font-weight: 700;
      }
      .old {
        text-decoration: line-through;
        color: rgb(53, 53, 53);
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .shop {
      margin: 15px 0;
      display: flex;
      line-height: 30px;
    }
    .btn {
      padding: 5px 0;
      display: flex
    }
  }
}
</style>