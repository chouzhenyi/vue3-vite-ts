<script lang="ts" setup></script>
<template>
  <div class="wrapper">
    <TopHeader title="工具库" />
    <router-view class="router-view-container"></router-view>
  </div>
</template>
<style lang="less" scoped>
.wrapper {
  height: 100vh;
  background-color: #f7f8f9;
}
</style>
