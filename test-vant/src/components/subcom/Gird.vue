<template>
  <div class="demo-icon">
    <div class="van-col" v-for="item in list" :key="item.id">
      <i class="van-icon">
        <img :src="item.img" alt>
      </i>
      <span>{{item.class}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: [
      {id:1, img: 'static/menu1.png', class: '新闻资讯'},
      {id:2, img: 'static/menu2.png', class: '图片分享'},
      {id:3, img: 'static/menu3.png', class: '商品购买'},
      {id:4, img: 'static/menu4.png', class: '留言反馈'},
      {id:5, img: 'static/menu5.png', class: '视频专区'},
      {id:6, img: 'static/menu6.png', class: '联系我们'},

    ]
  })
};
</script>

<style lang="less" scoped>
.demo-icon {
  font-size: 0;
  padding-top: 10px;

  .demo-icon-list {
    padding-top: 10px;
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
  }
  .van-col {
    float: none;
    text-align: center;
    width: 33.33333%;
    height: 100px;
    display: inline-block;
    vertical-align: middle;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .van-col span {
    display: block;
    padding: 0 5px;
    font-size: 12px;
    line-height: 14px;
  }
  .van-icon {
    font-size: 32px;
    margin: 15px 0;
    color: #455a64;
  }
}
</style>