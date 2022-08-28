<script lang="ts" setup>
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons-vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import { mobileIndexData } from "@/scripts/api/shop";
import ProductItem from "./components/ProductItem.vue";
import { ref } from "vue";
import type { Ref } from "vue";

const items: Ref<any[]> = ref([]);
mobileIndexData().then((res) => {
  const { list } = res;
  items.value.push(...list);
});
</script>
<template>
  <div>
    <div class="container">
      <a-row :wrap="true" :gutter="[10, 10]">
        <a-col v-for="(item, index) in items" :key="index" :span="12">
          <ProductItem :item="item" />
        </a-col>
      </a-row>
    </div>
    <a-layout-footer class="footer">
      <div class="footer-item">
        <LogoIcon :size="46" :type="1" />
      </div>
      <div class="footer-item">
        <div>
          <ShoppingCartOutlined />
          <div>准备Fou</div>
        </div>
      </div>
      <div class="footer-item">
        <div>
          <UserOutlined />
          <div>个人中心</div>
        </div>
      </div>
    </a-layout-footer>
  </div>
</template>
<style lang="less" scoped>
@import "@/styles/calculation.less";
.container {
  padding: 10px;
}
.footer {
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid var(--vt-c-white-soft);
  text-align: center;
  .footer-item {
    display: flex;
    align-items: center;

    :deep(.anticon) {
      font-size: 20px;
      margin-bottom: 4px;
    }
  }
}
</style>
