<template>
  <div class="child">
    child
    <p>child $attrs: {{ $attrs }}</p>
    <button @click="clickPlus">点我也+1</button>
    <!-- 不传$attrs -->
    <Child2 v-on="$listeners"/>
    <!-- 传$attrs -->
    <Child2 v-bind="$attrs" :name="name"/>
  </div>
</template>

<script>
import Child2 from '@/components/Child2.vue'
export default {
  components: { Child2 },
  inheritAttrs: false,
  data () {
    return {
      name: '换个名字'
    }
  },
  methods: {
    clickPlus () {
      this.$emit('clickEvent')
    }
  }
}
</script>

<style lang="scss" scoped>
.child {
  padding: 32px;
  border: 1px solid green;
}
</style>
