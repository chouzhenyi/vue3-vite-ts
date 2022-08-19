<script setup>
import { ref } from 'vue'
import { $t } from '@/js/plugins/i18n'
const title = ref($t('logout'));

localStorage.removeItem('userInfo')
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
</style>
