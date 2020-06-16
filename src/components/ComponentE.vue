<template>
  <div class="style-e">
    E组件
    <button @click="transform">点我让D组件接收到数据</button>
    <p v-if="DMessage">因为你点了D：{{DMessage}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      EMessage: 'D组件你好，我是E组件！'
    }
  },
  computed: {
    DMessage () {
      return this.$store.state.DMsg
    }
  },
  methods: {
    transform () {
      this.$store.commit('saveEMsg', {
        EMsg: this.EMessage
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.style-e {
  padding: 16px;
  border: 1px solid #d9d9d9;
}
</style>
