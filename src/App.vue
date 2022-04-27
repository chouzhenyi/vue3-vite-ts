<script setup>
  import { useRoute } from 'vue-router';
  import { watchEffect } from 'vue';
  const $route = useRoute();
  console.log($route, 'app');
  watchEffect(() => {
    console.log($route.name);
  })

</script>

<template>
  <div class="wrapper">
    <div class="router-wrapper">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/user">用户</router-link>
      <router-link to="/logout">登出</router-link>
    </div>
    <router-view class="view" />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
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
.router-wrapper {
  width: 200px;
  line-height: 30px;
  background: #639ef4;
  text-align: center;
}
.router-wrapper a:link,
.router-wrapper a:visited,
.router-wrapper a:hover,
.router-wrapper a:active {
  color: #fff;
  text-decoration: none;
}
.router-wrapper a {
  display: block;
  border-bottom: 1px solid #eee;
}

.view {
  flex: 1;
}
</style>
