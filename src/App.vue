<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="slide-left">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
