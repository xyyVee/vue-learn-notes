<template>
  <div class="style-d">
    D组件
    <p>来自B的值:{{fromParent}}</p>
    <p>inject: {{rootValue}}</p>
    <button @click="transform">点我让E组件接收到数据</button>
    <p v-if="EMessage">因为你点了E：{{EMessage}}</p>
  </div>
</template>

<script>
export default {
  inject: ['rootValue'],
  props: {
    fromParent: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      DMessage: '这里是D! Hello E!'
    }
  },
  computed: {
    EMessage () {
      return this.$store.state.EMsg
    }
  },
  mounted () {
    // console.log(this.$root)
  },
  methods: {
    transform () {
      this.$store.commit('saveDMsg', {
        DMsg: this.DMessage
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.style-d {
  padding: 16px;
  border: 1px solid #d9d9d9;
}
</style>
