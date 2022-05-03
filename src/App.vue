<template>
<div class="wrapper">
  <div class="tab-wrapper">
    <div class="tab-item" @click="tabClick('Index')">首页</div>
    <div class="tab-item" @click="tabClick('User')">用户页</div>
    <div class="tab-item" @click="tabClick('About')">关于</div>
    <div class="tab-item" @click="tabClick('Logout')">登出</div>
    <div>
      <van-sidebar v-model="langActive" @change="changeLang">
        <van-sidebar-item :title="item.title" v-for="(item, index) in langs" :key="index" />
      </van-sidebar>
    </div>
  </div>
  <router-view class="main" />
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import {
  Locale,
} from 'vant';
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'

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
    } else {
      Locale.use('zh-CN', zhCN);
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
.wrapper {
  display: flex;
}
.tab-wrapper {
  width: 200px;
  line-height: 30px;
  text-align: center;
  color: #fff;
}
.tab-wrapper .tab-item {
  background: #639ef4;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}
.main {
  flex: 1;
}
</style>
