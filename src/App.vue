<template>
<van-config-provider :theme-vars="themeVars" class="provider-wrapper">
  <router-view class="main" />
</van-config-provider>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import {
  Locale,
} from 'vant';
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'
import I18n from '@/js/plugins/i18n'

export default class App extends Vue {
  langActive = 1
  langs = [
    {
      title: '英文',
      val: 'enUS'
    },
    {
      title: '中文',
      val: 'zhCN'
    }
  ]
  tabClick(name: string) {
    this.$router.push({
      name,
    });
  }
  changeLang() {
    if (this.langActive === 0) {
      Locale.use('en-US', enUS);
      I18n.global.locale = 'en'
    } else {
      Locale.use('zh-CN', zhCN);
      I18n.global.locale = 'zh'
    }
  }
  themeVars = {
    navBarHeight: '50px',
    navBarBackgroundColor: 'transparent',
  }
}
</script>

<style lang="scss">
@import '@/style/colors.scss';
@import '@/style/base.scss';
*{
  padding: 0;
  margin: 0;
  outline: none;
  box-sizing: border-box;
}
html, body {
  height: 100%;
  font-size: 75px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  height: 100%;
  background-color: $gray-f7;
  .provider-wrapper {
    height: 100%;
    .main {
      height: 100%;
      background-color: $gray-f7;
    }
  }
}
</style>
