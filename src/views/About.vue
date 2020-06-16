<template>
  <div class="about">
    <h1>$attrs / $listeners</h1>
    <Parent :name="name" :age="age" :gender="gender" :address="address" />
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
      }
    }
  }
}
</script>
