<script setup>
import { ref } from 'vue'
import { Dialog } from 'vant';
import zinput from '@/components/common/zinput.vue';
const title = ref('关于');
const msg = ref('王忒住');
const handleVantClick = () => {
  Dialog({ message: '万特' });
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="msg">{{$t('msg')}}: {{msg}}</div>
    <div>
      <input type="text" v-model="msg" />
      <zinput v-model="msg" />
      <van-button type="primary" @click="handleVantClick">万特ui</van-button>
    </div>
  </div>
</template>

<style scoped>
</style>
