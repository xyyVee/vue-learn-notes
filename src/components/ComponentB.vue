<template>
  <div class="style-b">
    <p>B组件</p>
    <p>来自A的值: {{value}}</p>
    <p>$parent.belongA: <b>{{$parent.belongA}}</b></p>
    <!-- <p>count: {{count}}</p> -->
    <p>inject: {{rootValue}}</p>
    <p>eventBus: {{getValue}}</p>
    <p>
      <input type="text" v-model="inputValue" @input="change"/>
    </p>
    <ComD :from-parent="`${inputValue}`" />
  </div>
</template>

<script>
import { EventBus } from '../eventBus.js'
import ComD from '@/components/ComponentD.vue'
export default {
  components: { ComD },
  inject: ['rootValue'],
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      inputValue: this.value,
      count: 0,
      getValue: ''
    }
  },
  mounted () {
    // console.log(this.$parent.belongA)
    // const timer = setInterval(() => {
    //   this.count++
    //   if (this.count > 10) {
    //     clearInterval(timer)
    //   }
    // console.log(this.count)
    // }, 1000)
    EventBus.$on('sendMessage', val => {
      this.getValue = val
    })
  },
  methods: {
    change (val) {
      this.$emit('changeValue', Number(this.inputValue))
    }
  }
}
</script>

<style lang="scss" scoped>
.style-b {
  float: left;
  padding: 16px;
  border: 1px solid green;
  width: 200px;
}
</style>
