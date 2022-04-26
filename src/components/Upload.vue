<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter, useRoute } from "vue-router";
import { ref } from 'vue';
const title = ref('上传');

const $router = useRouter();
const $route = useRoute();

onBeforeRouteLeave(() => {
  console.log('Upload组件，离开路由');
});
onBeforeRouteUpdate(() => {
  console.log('Upload组件，更新路由');
});
let index = 0;
const routeClick = () => {
  index++;
  $router.replace({
    name: 'Upload',
    query: {
      name: `名称${index}`
    }
  });
  console.log($route.path);
};
</script>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    console.log('Upload 组件进入路由前', {
      to,
      from,
    });
    next(vm => {
      console.log(vm, 'vm this');
    });
  }
})
</script>


<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="button" value="更新路由" @click="routeClick" />
  </div>
</template>

<style scoped>
</style>
