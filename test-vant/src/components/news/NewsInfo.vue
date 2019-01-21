<template>
  <div>
    <div class="newsinfo">
      <h3>{{newsinfo.title}}</h3>
      <div class="mes">
        <span class="date">{{newsinfo.add_time}}</span>
        <span class="click">点击次数: {{newsinfo.click}}</span>
      </div>
    </div>
    <div>{{newsinfo.content}}</div>

    <!-- 父传子 -->
    <comment :id="id"></comment>
  </div>
</template>

<script>
// 引入评论子组件
import comment from '../subcom/Comment'

export default {
  data: () => ({
    id: '',
    newsinfo: {}
  }),
  created(){
    this.id = this.$route.params.id
    this.getinfo()
  },
  methods: {
    async getinfo() {
      const { data: {status, message} } = await this.$http.get('api/getnew/' + this.id)
      if(status === 0) {
        this.newsinfo = message
      }
    }
  },
  components: {
    comment
  }
};
</script>

<style lang="less">
  .newsinfo {
    h3 {
      color: rgb(252, 21, 21);
      text-align: center;
    }
    .mes {
      overflow: hidden;
      margin-bottom: 10px;
      .date {
        float: left;
        padding-left: 15px
      }
      .click {
        float: right;
        padding-right: 15px
      }
    }
  }
</style>