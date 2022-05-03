<script setup>
import { ref, inject, watch, reactive } from 'vue';
import router from '@/router/index.js';

const name = ref('用户');
const goUpload = () => {
    router.push({
        name: 'Upload'
    });
};
const $i18n = inject('i18n');

const system = ref(0);
const telecom = ref(0);
const watchTelecom = watch(telecom, (n, o) => {
  console.log('监听 telecom', n);
})
const watchSystem = watch(system, (n, o) => {
  console.log('监听 system', n);
})
const changeWatch = () => {
  system.value = Math.floor(Math.random() * 1e3);
  telecom.value = Math.floor(Math.random() * 1e3);
}
const person = reactive({
  name: 'wone'
});
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
    <h1>type: -- {{person.type}} --</h1>
    <input type="button" value="去上传" @click="goUpload">
    <input type="button" value="设置监听" @click="changeWatch">
    <div>{{$translate('papa')}}</div>
  </div>
</template>

<style scoped>
</style>
