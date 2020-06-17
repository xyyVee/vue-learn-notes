<template>
  <div class="child">
    child2
    <p >child $attrs: {{ $attrs }}</p>
    <button v-if="$listeners.clickEvent" @click="clickPlus">点我也+1</button>
    <p v-else>没有绑定$listeners</p>
  </div>
</template>

<script>
export default {
  methods: {
    clickPlus () {
      this.$emit('clickEvent')
    }
  },
  created () {
    // console.log(this.$listeners)
  }
}
</script>

<style lang="scss" scoped>
.child {
  padding: 32px;
  border: 1px solid green;
}
</style>
