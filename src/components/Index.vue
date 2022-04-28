<script lang="ts" setup>
import { Vue } from "vue-class-component";
import { add } from "@/js/utils/calculate";
import { ref } from "vue";

const title = ref('首页');
const forStr = (num: number):string => {
  return `${num}`;
}
const forAdd = () => {
    const results = add([1, 2, 3]);
    const strResults: string = forStr(results);
    console.log(strResults, typeof strResults);
  }
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="button" value="累加" @click="forAdd" />
  </div>
</template>

<style scoped>
</style>
