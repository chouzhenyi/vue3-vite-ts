<script setup lang="ts">
import { reactive, ref } from "vue";
const linkData = reactive({
  activeIndex: 0,
  linkButtonSize: ref("large"),
  list: [
    {
      index: 0,
      header: "商城界面",
      children: [
        {
          to: "/mall",
          desc: "商品列表",
        },
      ],
    },
    {
      index: 1,
      header: "五十九中学区房统计",

      children: [
        {
          to: "/house",
          desc: "学区房范围",
        },
      ],
    },
    {
      index: 2,
      header: "各种工具应用",

      children: [
        {
          to: "/tool/ExcelPage",
          desc: "读取excel",
        },
        {
          to: "/tool/Tesseract",
          desc: "图片识别",
        },
      ],
    },
  ],
});
</script>

<template>
  <main>
    <a-collapse v-model:activeKey="linkData.activeIndex" accordion>
      <a-collapse-panel
        v-for="item in linkData.list"
        :key="item.index"
        :header="item.header"
      >
        <router-link
          v-for="(l, lIndex) in item.children"
          :to="l.to"
          :key="lIndex"
        >
          <a-button type="link" :size="linkData.linkButtonSize">{{
            l.desc
          }}</a-button>
        </router-link>
      </a-collapse-panel>
    </a-collapse>
  </main>
</template>

<style lang="less" scoped>
main {
  .link-item {
    display: block;
  }
}
</style>
