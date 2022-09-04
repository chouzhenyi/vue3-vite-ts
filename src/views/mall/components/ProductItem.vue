<template>
  <div class="wrapper">
    <a-image
      :src="item.picUrl"
      class="pic"
      fallback="./images/default.png"
      :preview="false"
    />
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
      padding: 0 12px;
      height: 42px;
      margin-top: 12px;
      .over-hidden();
      .font14();
      line-height: 22px;
      text-overflow: ellipsis;
    }
    .price-sales-tips {
      padding: 0 12px 12px 12px;
      line-height: 18px;
      margin-top: 12px;
      .font12();
      .price-color {
        color: var(--vt-c-text-red-1);
      }
      .price-num {
        margin: 0 12px 0 2px;
      }
    }
  }
}
</style>
