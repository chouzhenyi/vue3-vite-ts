<script setup>
import { ref } from 'vue'
const name = ref('登录');
localStorage.setItem('userInfo', 1)
</script>

<template>
  <h1>{{ name }}</h1>
</template>

<style scoped>
</style>
