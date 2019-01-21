<template>
  <div class="photoinfo">
    <h3>{{ photoinfo.title }}</h3>
    <div class="subtitle">
      <span>发表时间:{{ photoinfo.add_time }}</span>
      <span>点击次数:{{ photoinfo.click }}</span>
    </div>
    <hr>

    <div class="thumbImg">
      <img v-for="(item,index) in imgList" :key="item.src" :src="item.src" @click="getclick(index)">
    </div>

    <div class="content"> {{ photoinfo.content }} </div>

    <comment :id="id"></comment>
  </div>
</template>

<script>
// 引入缩略图组件
import {ImagePreview} from 'vant'

// 引入comment组价
import comment from '../subcom/Comment'
export default {
  data: () => ({
    id: '',
    photoinfo: {},    // 评详情论数据
    imgList: []   // 缩略图数据
  }),
  created(){
    this.id = this.$route.params.id
    this.getimageInfo()
    this.getThumbs()
  },
  methods:{
    // 获取评详情论数据 渲染标题评论等等
    async getimageInfo(){
      const {data:{status,message}} = await this.$http.get('api/getimageInfo/'+this.id)
      // console.log(message)
      if(status === 0){
        this.photoinfo = message
      }
    },
    // 获取缩略图数据 将图片渲染到页面上
    async getThumbs(){
      const {data:{status,message}} = await this.$http.get('api/getthumimages/' + this.id)
      // console.log(message)
      if(status === 0) {
        this.imgList = message
      }
    },
    // 点击图片时显示详情图片 
    getclick(index) {
      let images = []
      this.imgList.forEach(item => {
        if(item.src != null) {
          images.push(item.src)
        }
      })
      // vant组件ImagePreview方法
      // index参数是设置点击图片时显示的对应索引的详情图
      ImagePreview({images,startPosition:index})
    }
  },
  components:{
    comment
  }
};
</script>

<style lang="less" scoped>
  .photoinfo {
    padding: 5px;
    h3 {
      color: rgb(80, 194, 240);
      font-size: 15px;
      text-align: center;
      margin: 0 0 10px;
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      color: #ccc;
    }
    .content {
      font-size: 14px
    }
    .thumbImg {
      text-align: center;
      display: flex;
      justify-content: space-around;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
</style>