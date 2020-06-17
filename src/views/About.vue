<template>
  <div class="about">
    <h1>count: {{count}}</h1>
    <Parent :name="name" :age="age" :gender="gender" :count="count" :address="address" @clickEvent="clickEvent"/>
  </div>
</template>
<script>
import Parent from '@/components/Parent.vue'
export default {
  components: { Parent },
  data () {
    return {
      name: '阿华',
      age: 18,
      gender: 'male',
      address: {
        province: '浙江省',
        city: '杭州市'
      },
      count: 0
    }
  },
  methods: {
    clickEvent () {
      this.count++
    }
  }
}
</script>
