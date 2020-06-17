<template>
  <div class="parent">
    <p>这是父节点A</p>
    <p>A组件值：{{value}}</p>
    <p>belongA: {{belongA}}</p>
    <!-- <p v-if="show">
      $children: {{$children[0].count}}
    </p> -->
    <!-- <p v-if="$refs.compB">refs: {{$refs.compB.count}}</p> -->
    <div>
     <button @click="changeB">改变B的值inputValue为200</button>
    </div>
    <ComB ref="compB" :value="value" @changeValue="receiveValue" />
    <ComC />
  </div>
</template>

<script>
import ComB from '@/components/ComponentB.vue'
import ComC from '@/components/ComponentC.vue'
export default {
  components: { ComB, ComC },
  provide: {
    rootValue: 'This is from A'
  },
  data () {
    return {
      value: 0,
      belongA: 'A内部值',
      show: false
    }
  },
  mounted () {
    // console.log(this.$children[0].count, this.$refs.compB.count, 'get')
    // setTimeout(() => {
    // console.log(this.$children[0].count, this.$refs.compB.count, 'get')
    //   this.show = true
    // }, 3000)
  },
  methods: {
    receiveValue (val) {
      console.log(val)
      this.value = val
    },
    changeB () {
      this.$children[0].inputValue = 200
    }
  }
}
</script>

<style lang="scss" scoped>
.parent {
  padding: 32px;
  width: 500px;
  margin: 0 auto;
  border: 1px solid red;
  overflow: hidden;
}
</style>
