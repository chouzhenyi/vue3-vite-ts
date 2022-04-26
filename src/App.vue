<script setup>
</script>

<template>
  <router-link to="/">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-link to="/user">用户</router-link>
  <router-view />
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
</style>
