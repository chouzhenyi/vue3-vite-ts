<script setup>
import { ref, inject } from 'vue';
import router from '@/router/index.js';
const name = ref('用户');
const goUpload = () => {
    router.push({
        name: 'Upload'
    });
};
const $i18n = inject('i18n');
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
    <h1>{{ name }}</h1>
    <input type="button" value="去上传" @click="goUpload">
    <div>{{$translate('papa')}}</div>
  </div>
</template>

<style scoped>
</style>
