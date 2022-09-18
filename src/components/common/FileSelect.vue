<template>
  <div class="file-select-wrapper">
    <a-button type="primary" @click="fileButtonClick">{{
      text || "选择文件"
    }}</a-button>
    <input type="file" ref="file" class="hidden" @change="fileSelectChange" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
defineProps({
  text: String,
});
const emit = defineEmits(["select"]);
const file = ref(null);
const fileButtonClick = () => {
  const el = file.value as unknown as HTMLInputElement;
  el?.click?.();
};
const fileSelectChange = (event: Event) => {
  const { target } = event;
  const { files } = target as HTMLInputElement;
  const file = (files as FileList)[0];
  emit("select", file);
};
</script>
<style lang="less" scoped>
.file-select-wrapper {
  width: 88px;
  height: 32px;
  font-size: 0;
}
.hidden {
  display: none;
}
</style>
