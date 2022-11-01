<template>
  <div>
    <RouterView v-slot="{ Component }">
      <transition name="slide-right">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>
<style lang="less" scoped>
* {
  font-size: 14px;
}
</style>
