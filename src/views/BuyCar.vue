<script lang="ts" setup>
import { ref } from 'vue'
import { $t } from '@/js/plugins/i18n'
const title = ref($t('buycar'));

</script>

<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <div class="box">
      <span>方形</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
@font14: 14px;
.border {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2) inset;
}
#font() {
  .blue {
    color: #639ef4;
  }
  .font18 {
    font-size: calc(18rem/75);
  }
}
.title {
  font-size: @font14;
}
.box {
  position: relative;
  width: calc(200rem/75);
  height: calc(200rem/75);
  .border();
  #font.blue();
  #font.font18();
  &:before {
    content: "**********";
    position: absolute;
    color: #ff1010;
    font-size: calc(16rem/75);
    top: 0;
    left: 0;
  }
}
</style>
