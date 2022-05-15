<script lang="ts" setup>
import { ref } from "vue";
import { $t } from '@/js/plugins/i18n'

// 首页
const title = ref($t('homepage'));
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
</style>
