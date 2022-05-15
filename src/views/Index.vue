<script lang="ts" setup>
import { ref } from "vue";
import { $t } from '@/js/plugins/i18n'
import { useRouter } from 'vue-router'
import logoVue from "@/components/static/logo.vue";
import searchVue from "@/views/components/index/search.vue";
import signVue from "@/views/components/index/sign.vue"

// 首页
const title = ref($t('homepage'));
const $router = useRouter();
const checkSearch = () => {
  // 去搜索
  console.log('search');
  
}
const checkSign = () => {
  // 去签到
  console.log('sign');
  
}
// 首页下拉列表
const loading = ref(false);
const onRefresh = () => {
  loading.value = false
};
</script>

<template>
  <div>
    <van-nav-bar
      @click-right="checkSign"
    >
      <template #left>
        <logo-vue :size="46" :type="1" />
      </template>
      <template #title>
        <search-vue @click="checkSearch" />
      </template>
      <template #right>
        <sign-vue class="left-search" />
      </template>
    </van-nav-bar>
    <div class="container">
      <div class="grid-nav">
        <van-grid :column-num="4" :gutter="10">
          <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/base.scss';
@import '@/style/colors.scss';
.container {
  height: 100%;
  .grid-nav {
    margin: px2rem(10px);
    background-color: $white;
    border-radius: px2rem(6px);
    padding: px2rem(10px) 0;
  }
}
</style>
