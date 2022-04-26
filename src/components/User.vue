<script setup>
import { ref } from 'vue';
import router from '@/router/index.js';
const name = ref('用户');
const goUpload = () => {
    router.push({
        name: 'Upload'
    });
};
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <input type="button" value="去上传" @click="goUpload">
  </div>
</template>

<style scoped>
</style>
