<script setup>
import { ref } from 'vue'
import { $t } from '@/js/plugins/i18n'
const title = ref($t('about'));
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
</style>
