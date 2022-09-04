<script lang="ts" setup>
import { useRouter } from "vue-router";
const $router = useRouter();
const goBack = () => {
  $router.back();
};
</script>
<template>
  <div>
    <a-page-header class="header" title="学区房" @back="goBack" />
    <RouterView v-slot="{ Component }">
      <transition name="slide-right">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>
<style lang="less" scoped>
.header {
  color: #333;
  padding: 0 10px;
  font-size: 14px;
  :deep(.ant-page-header-heading) {
    border-bottom: 1px solid #666;
  }
}
</style>
