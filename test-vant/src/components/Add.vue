<template>
  <div class="add">
    <input type="text" v-model="this.$store.state.count">
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    add(){
      this.$store.commit('add')
    }
  }
};
</script>

<style lang="less" scoped>

</style>