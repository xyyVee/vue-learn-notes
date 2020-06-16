<template>
  <div class="style-c">
    C组件
    <p>inject: {{rootValue}}</p>
    <button @click="sendMessage">向组件B发送消息</button>
    <CompE class="style-e" />
  </div>
</template>

<script>
import { EventBus } from '../eventBus.js'
import CompE from '@/components/ComponentE.vue'
export default {
  components: { CompE },
  inject: ['rootValue'],
  methods: {
    sendMessage () {
      EventBus.$emit('sendMessage', '这是来自组件C的消息')
    }
  }
}
</script>

<style lang="scss" scoped>
.style-c {
  float: left;
  padding: 16px;
  border: 1px solid green;
  width: 200px;
}
.style-e {
  margin-top: 170px;
}
</style>
