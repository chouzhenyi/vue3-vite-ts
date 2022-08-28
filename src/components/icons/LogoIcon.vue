<template>
  <div
    class="logo-wrapper"
    :style="{ width: style.with, height: style.height }"
  >
    <img src="@/assets/images/logo/fou.png" alt="fou" v-if="type === 0" />
    <img src="@/assets/images/logo/fou.trans.png" alt="fou" v-if="type === 1" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const props = defineProps({
  size: Number,
  type: Number,
});
const style = reactive({
  height: `${props.size}px`,
  with: `${props.size}px`,
});
</script>

<style lang="less" scoped>
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
