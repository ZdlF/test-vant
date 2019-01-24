<template>
  <div class="sub">
    <div>sub组件 ： {{this.$store.state.count}}</div>
    <button @click="sub">sub</button>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    sub(){
      this.$store.commit('sub')
    }
  }
};
</script>

<style scoped>

</style>
