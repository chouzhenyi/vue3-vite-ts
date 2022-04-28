<script>
import { Vue } from "vue-class-component";
import { ref } from 'vue'

export default class App extends Vue {
  setup() {
    const title = ref('首页');
    return {
      title
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
</style>
