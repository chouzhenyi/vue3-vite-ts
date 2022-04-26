import { createRouter, createWebHashHistory } from "vue-router";
import index from "@/components/index.vue";

const routes = [
    { path: "/", name: "index", component: index },
    {
      path: "/about",
      name: "About",
      component: () => import("@/components/About.vue"),
    },
    {
        path: "/user",
        name: "User",
        component: () => import("@/components/User.vue"),
      },
  ];
  
  export default createRouter({
    history: createWebHashHistory(),
    routes,
  });