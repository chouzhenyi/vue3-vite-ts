<template>
  <div class="wrapper">
    <div class="search">
      <div class="input">寻找Fou点！</div>
      <div class="button">搜索</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/calculation.less";
@import "@/styles/font.less";
.wrapper {
  width: 180px;
  .flex-column-center();
  font-size: 14px;
  .search {
    border: 2px solid var(--vt-c-text-red-1);
    padding: 2px;
    height: 40px;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    .input {
      color: var(--vt-c-divider-light-2);
      flex: 1;
      padding-left: 10px;
      .flex-column-center();
      font-size: 16px;
    }
    .button {
      color: var(--vt-c-white);
      padding: 0 14px;
      background: var(--vt-c-text-red-1);
      border-radius: 16px;
      .flex-column-center();
    }
  }
}
</style>
