<script lang="ts" setup></script>
<template>
  <div>
    <TopHeader title="工具库" />
    <div class="wrapper">
      <router-view class="router-view-container"></router-view>
    </div>
  </div>
</template>
<style lang="less" scoped>
.wrapper {
  display: flex;
  height: 100vh;
  padding: 0 10px;
}
</style>
