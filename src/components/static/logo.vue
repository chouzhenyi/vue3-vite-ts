<template>
  <div class="logo-wrapper" :style="{ width: style.with, height: style.height }">
    <img src="fou.png" alt="fou" v-if="type === 0">
    <img src="fou.trans.png" alt="fou" v-if="type === 1">
  </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive, ref } from 'vue'
const props = defineProps({
  size: Number,
  type: Number,
});
const style = reactive({
  height: `${props.size}px`,
  with: `${props.size}px`,
});
</script>

<style lang="scss"  scoped>
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    height: 80%;
    width: 80%;
  }
}
</style>