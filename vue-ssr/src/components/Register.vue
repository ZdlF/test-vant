<template>
  <div class="register">
    <mt-spinner type="snake"></mt-spinner>
    this is register
    <div>
      <mark>{{ count }}</mark>
      <h2>{{ msg }}</h2>
      <button @click="sub">sub</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  data: () => ({

  }),
  methods: {
    ...mapMutations(['add','sub'])
  },
  computed: {
    // 通过辅助函数
    ...mapGetters(['count','msg'])
  }
};
</script>

<style lang="less" scoped>
  .register {
    color:gold
  }
</style>