<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { ref } from 'vue';
import { $t } from '@/js/plugins/i18n'
const title = ref($t('upload'));

onBeforeRouteLeave(() => {
  console.log('Upload组件，离开路由');
});
onBeforeRouteUpdate(() => {
  console.log('Upload组件，更新路由');
});
</script>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    console.log('Upload 组件进入路由前', {
      to,
      from,
    });
    next(vm => {
      console.log(vm, 'vm this');
    });
  }
})
</script>


<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
</style>
