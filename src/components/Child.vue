<template>
  <div class="child">
    child
    <p>child $attrs: {{ $attrs }}</p>
    <!-- 不传$attrs -->
    <Child2 />
    <!-- 传$attrs -->
    <Child2 v-bind="$attrs"/>
  </div>
</template>

<script>
import Child2 from '@/components/Child2.vue'
export default {
  components: { Child2 }
}
</script>

<style lang="scss" scoped>
.child {
  padding: 32px;
  border: 1px solid green;
}
</style>
