<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="tent"></textarea>

    <van-button type="primary" size="large" @click="publish">发表评论</van-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in commentList" :key="i">
        <div class="cmt-title">
          第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | getDate}}
        </div>
        <div class="cmt-body">
          {{item.content}}
        </div>
      </div>
    </div>

    <van-button type="danger" size="large" plain @click="getMore">加载更多</van-button>

  </div>
</template>

<script>
import { toast } from 'vant'
export default {
  data: () => ({
    pageindex: 1,
    commentList: [],
    tent:''
  }),
  // 使用props接收父组件传过来的参数
  props:['id'],
  created(){
    this.getComment()
  },
  methods: {
    //查询评论
    async getComment(){
      // const {data:{status,message}} = await this.$http.get(`api/getcomments/${this.$route.params.id}?pageindex=${this.pageindex}`)
      const {data:{status,message}} = await this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}`)
      // console.log(message)
      if(status === 0) {
        this.commentList = this.commentList.concat(message)
      }
    },
    // 加载更多评论
    getMore(){
        this.pageindex++
        this.getComment()
    },
    // 发表评论
    async publish(){
      if(this.tent.trim().length === 0) {
        return toast('评论内容不能为空')
      }
      // const {data:{status,message}} = await this.$http.post(`api/postcomment/${this.$route.params.id}`,{content:this.tent})
      const {data:{status,message}} = await this.$http.post(`api/postcomment/${this.id}`,{content:this.tent})
      if(status === 0){
        var com = { user_name: '匿名用户', add_time: new Date(), content: this.tent}

        this.commentList.unshift(com)
        toast.success(message)
        this.getComment()
        this.tent = ''
      }
    }
  }
};
</script>

<style lang="less">
.comment {
  padding: 0 5px;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    width: 98.5%;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>

