<template>
  <div class="test">
    {{$store.state.count}}
    <add></add>
    <subt></subt>
  </div>
</template>

<script>
import add from '../Add'
import subt from '../Sub'
export default {
  data: () => ({
    // 
  }),
  components: {
    add,
    subt
  }
};
</script>

<style lang="less" scoped>
</style>