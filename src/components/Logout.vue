<script setup>
import { ref } from 'vue'
const name = ref('登出');
localStorage.removeItem('userInfo')
</script>

<template>
  <h1>{{ name }}</h1>
</template>

<style scoped>
</style>
