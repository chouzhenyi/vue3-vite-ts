<script setup>
import { ref } from 'vue'
import { $t } from '@/js/plugins/i18n'
const title = ref($t('buycar'));
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
</style>
