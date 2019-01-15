<template>
  <div class="login">
    <mt-button type="default">default</mt-button>
    this is login component
  </div>
</template>

<script>
// export default 相当于 module.exports 暴露
export default {
  data: () => ({

    })
};
</script>

<style lang="less" scoped>
// 设置 lang="less" 可以直接写less样式
// 设置scoped 添加样式的作用域 使样式只作用于自身组件
@color: green;
.login {
  color: @color
}
</style>