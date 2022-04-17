<script setup>
import { ref } from 'vue'
import { add } from '@/js/utils/tools.js';

defineProps({
  msg: String
})

const count = ref(0)

console.log(add(1, 2))
const title = '赵铁柱'
const handle = () => {
  console.log('上班', count.value++);
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <div @click="handle">烫头 {{ title }}</div>
</template>

<style scoped>
</style>
