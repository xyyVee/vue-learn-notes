<template>
  <div class="style-d">
    D组件
    <p>来自B的值:{{fromParent}}</p>
  </div>
</template>

<script>
export default {
  props: {
    fromParent: {
      type: String,
      default: ''
    }
  },
  mounted () {
    // console.log(this.$root)
  }
}
</script>

<style lang="scss" scoped>
.style-d {
  padding: 16px;
  border: 1px solid #d9d9d9;
}
</style>
