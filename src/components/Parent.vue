<template>
  <div class="parent">
   parent
   <p>prop > name: {{name}}</p>
   <p>$attrs: {{ $attrs }}</p>
   <Child v-bind="$attrs" :parent="parent" />
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
export default {
  components: { Child },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性'
  props: {
    name: String // name作为props属性绑定
  },
  data () {
    return {
      parent: '他爸'
    }
  },
  created () {
    console.log(this.name, this.$attrs)
  }
}
</script>

<style lang="scss" scoped>
.parent {
  border: 1px solid red;
  padding: 64px;
  width: 500px;
  margin: 0 auto;
}
</style>
