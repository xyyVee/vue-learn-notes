<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ComponentA/>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentA from '@/components/ComponentA.vue'

export default {
  name: 'Home',
  components: {
    ComponentA
  }
}
</script>
