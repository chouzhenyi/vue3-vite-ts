<script lang="ts" setup>
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons-vue";
import type { Ref } from "vue";
import type { AdType, ProductItemType } from "@/scripts/types/mall";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import { mobileIndexData } from "@/scripts/api/shop";
import { adDataList } from "@/scripts/actions/index.action";
import ProductItem from "./components/ProductItem.vue";
import SearchProduct from "./components/SearchProduct.vue";
import GoSign from "./components/GoSign.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

// 头部搜索、签到button
const $router = useRouter();
const checkSign = () => {
  console.log("去签到", $router);
};
const checkSearch = () => {
  console.log("去搜索", $router);
};
// 广告导航
const ads: Ref<AdType[]> = ref([]);
const renderADItem = (params: AdType) => {
  const { id, title, link, src } = params;
  const item = {
    id,
    title,
    link,
    src,
  };
  return item;
};
const renderADLinks = () => {
  adDataList.forEach((item) => {
    ads.value.push(renderADItem(item as AdType));
  });
};
renderADLinks();
// 商品列表
const items: Ref<ProductItemType[]> = ref([]);
mobileIndexData().then((res) => {
  const { list } = res;
  items.value.push(...list);
});
</script>
<template>
  <div>
    <div class="header">
      <LogoIcon :type="0" />
      <SearchProduct @click="checkSearch" class="search" />
      <GoSign @click="checkSign" class="left-search" />
    </div>
    <div class="nav-wrapper">
      <div v-for="(item, index) in ads" :key="index" class="nav-item">
        <img :src="item.src" :alt="item.title" class="grid-item-image" />
        <div class="font12">{{ item.title }}</div>
      </div>
    </div>
    <div class="container">
      <a-row :wrap="true" :gutter="[10, 10]">
        <a-col v-for="(item, index) in items" :key="index" :span="12">
          <ProductItem :item="item" />
        </a-col>
      </a-row>
    </div>
    <a-layout-footer class="footer">
      <div class="footer-item">
        <LogoIcon :type="1" />
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
@import "@/styles/font.less";
.header {
  width: 100%;
  height: 50px;
  padding: 0 10px;
  background-color: var(--vt-c-white);
  display: flex;
  align-items: center;
  .search {
    flex: 1;
    margin: 0 10px;
  }
  .left-search {
    width: 40px;
  }
}
.nav-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  margin: 10px;
  padding: 10px 0;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  .font12();
  .nav-item {
    img {
      width: 90%;
    }
  }
}
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
