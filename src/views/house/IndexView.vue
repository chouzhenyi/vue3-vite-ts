<script lang="ts" setup></script>
<template>
  <div>
    <TopHeader title="学区房" />
    <RouterView v-slot="{ Component }">
      <transition name="slide-right">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>
<style lang="less" scoped></style>
