<template>
  <div class="wrapper">
    <img :src="item.picUrl" class="pic" />
    <div class="text-wrapper">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="price-sales-tips">
        <span class="price-color font12">¥</span>
        <span class="price-color font14 price-num">{{ item.marketPrice }}</span>
        <span class="color-gray-9 font12">{{ item.extMap.recExc }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { toRaw } from "vue";

const props = defineProps({
  item: {
    type: Object,
    require: true,
  },
});
type itemType = {
  picUrl: string;
  title: string;
  marketPrice: string;
  extMap: {
    recExc: string;
  };
};
const rawProps = toRaw(props);
const item = rawProps.item as itemType;
</script>
<style lang="less" scoped>
@import "@/styles/calculation.less";
@import "@/styles/font.less";
.wrapper {
  .over-hidden();
  border-radius: 8px;
  img.pic {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .text-wrapper {
    background-color: #fff;
    .over-hidden();
    .title {
      padding: 0 .px2rem(12px) [ @rem];
      height: .px2rem(42px) [ @rem];
      margin-top: .px2rem(12px) [ @rem];
      .over-hidden();
      .font14();
      line-height: .px2rem(22px) [ @rem];
      text-overflow: ellipsis;
    }
    .price-sales-tips {
      padding: 0 .px2rem(12px) [ @rem] .px2rem(12px) [ @rem] .px2rem(12px) [
        @rem];
      line-height: .px2rem(18px) [ @rem];
      margin-top: .px2rem(12px) [ @rem];
      .font12();
      .price-color {
        color: var(--vt-c-text-red-1);
      }
      .price-num {
        margin: 0 .px2rem(12px) [ @rem] 0 .px2rem(2px) [ @rem];
      }
    }
  }
}
</style>
