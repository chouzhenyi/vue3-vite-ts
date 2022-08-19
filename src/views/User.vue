<script setup>
import { ref, inject, watch, reactive } from 'vue';
import { $t } from '@/js/plugins/i18n'

const title = ref($t('user'));
</script>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    created() {
    }
});
</script>


<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
</style>
