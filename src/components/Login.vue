<script setup>
import { ref } from 'vue'
import { randomStr } from '@/js/utils/tools.js';
const name = ref('登录');
localStorage.setItem('userInfo', randomStr);
</script>

<template>
  <h1>{{ name }}</h1>
</template>

<style scoped>
</style>
