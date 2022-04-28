<script setup>
import { ref } from 'vue'
import zinput from '@/components/common/zinput.vue';
const title = ref('关于');
const msg = ref('王忒住');
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="msg">{{$t('msg')}}: {{msg}}</div>
    <div>
      <input type="text" v-model="msg" />
      <zinput v-model="msg" />
    </div>
  </div>
</template>

<style scoped>
</style>
