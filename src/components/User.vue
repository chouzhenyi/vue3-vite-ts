<script setup>
import { ref } from 'vue'
const name = ref('用户');
console.log(this);
</script>

<template>
  <h1>{{ name }}</h1>
</template>

<style scoped>
</style>
