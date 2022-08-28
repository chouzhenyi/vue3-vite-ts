<template>
  <div class="wrapper">
    <div class="sign">签到</div>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/calculation.less";
@import "@/styles/font.less";
.wrapper {
  .flex-center();
  .sign {
    width: 40px;
    height: 40px;
    background-color: var(--vt-c-text-red-1);
    color: var(--vt-c-white);
    border-radius: 50%;
    .font14();
    .font-weight-500();
    .flex-center();
  }
}
</style>
