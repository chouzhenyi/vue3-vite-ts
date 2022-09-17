<script lang="ts" setup>
import { useRouter } from "vue-router";
defineProps({
  title: String,
});
const $router = useRouter();
const goBack = () => {
  $router.back();
};
</script>
<template>
  <div>
    <a-page-header class="header" :title="title" @back="goBack" />
  </div>
</template>
<style lang="less" scoped>
.header {
  padding: 0 10px;
  :deep(.ant-page-header-heading) {
    border-bottom: 1px solid rgba(#666, 0.2);
  }
  :deep(.ant-page-header-heading-title) {
    color: rgba(#666, 0.7);
  }
  :deep(.ant-page-header-back-button) {
    color: rgba(#666, 0.7);
  }
  margin-bottom: 10px;
}
</style>
