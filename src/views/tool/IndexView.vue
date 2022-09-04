<script lang="ts" setup></script>
<template>
  <div class="wrapper">
    <div class="left-menu">
      <router-link to="/tool/ExcelPage" class="menu-item">
        读取excel
      </router-link>
    </div>
    <router-view class="router-view-container"></router-view>
  </div>
</template>
<style lang="less" scoped>
.wrapper {
  display: flex;
  height: 100vh;
  .left-menu {
    width: 100px;
    font-size: 14px;
    padding: 10px;
    height: 100vh;
    border-right: 1px solid #888;
    text-align: center;
    background-color: rgba(#639efc, 0.2);
    .menu-item {
      border-bottom: 1px dashed #c8c8c8;
      line-height: 24px;
    }
    :deep(.ant-btn) {
      padding: 0;
    }
  }
  .router-view-container {
    flex: 1;
    padding: 10px;
  }
}
</style>
