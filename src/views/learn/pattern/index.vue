<template>
  <div class="wrapper">
    <router-link to="/learn/pattern/createMode">创建模式</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "learnPattern",
  setup() {
    return {};
  },
});
</script>
<style lang="less">
.wrapper {
  padding: 10px;
}
</style>
