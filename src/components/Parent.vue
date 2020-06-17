<template>
  <div class="parent">
   parent
   <p>prop > name: {{name}}</p>
   <p>$attrs: {{ $attrs }}</p>
   <p class="red">来自父级的count: {{count}}</p>
   <button @click="clickPlus">点我+1</button>
   <Child v-bind="$attrs" :parent="parent" v-on="$listeners" />
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
export default {
  components: { Child },
  inheritAttrs: false, // 默认值true 可以关闭自动挂载到组件根元素上的没有在props声明的属性' DOM元素上
  props: {
    name: String, // name作为props属性绑定
    count: Number
  },
  data () {
    return {
      parent: '父级元素'
    }
  },
  created () {
    // console.log(this.name, this.$attrs, this.$listeners)
  },
  methods: {
    clickPlus () {
      this.$emit('clickEvent')
    }
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
.red {
  color: red;
}
</style>
