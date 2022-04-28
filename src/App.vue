<template>
<div class="wrapper">
  <div class="tab-wrapper">
    <div class="tab-item" @click="tabClick('Index')">首页</div>
    <div class="tab-item" @click="tabClick('User')">用户页</div>
    <div class="tab-item" @click="tabClick('About')">关于</div>
    <div class="tab-item" @click="tabClick('Logout')">登出</div>
  </div>
  <router-view class="main" />
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {
  tabClick(name) {
    this.$router.push({
      name,
    });
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
