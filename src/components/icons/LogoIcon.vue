<template>
  <img
    src="@/assets/images/logo/fou.png"
    alt="fou"
    class="logo-img"
    v-if="type === 0"
  />
  <img
    src="@/assets/images/logo/fou.trans.png"
    alt="fou"
    class="logo-img"
    v-else
  />
</template>

<script lang="ts" setup>
defineProps({
  type: Number,
});
</script>

<style lang="less" scoped>
.logo-img {
  border-radius: 50%;
  height: 80%;
}
</style>
