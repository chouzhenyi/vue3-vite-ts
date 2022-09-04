import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mall",
      name: "mall",
      component: () => import("@/views/mall/IndexView.vue"),
      redirect: "/mall/MallHomePage",
      children: [
        {
          path: "/mall/MallHomePage",
          name: "MallHomePage",
          component: () => import("@/views/mall/MallHomePage.vue"),
        },
        {
          path: "/mall/BuyCar",
          name: "BuyCar",
          component: () => import("@/views/mall/pay/BuyCar.vue"),
        },
        {
          path: "/mall/MallPay",
          name: "MallPay",
          component: () => import("@/views/mall/pay/MallPay.vue"),
        },
      ],
    },
    {
      path: "/house",
      name: "house",
      component: () => import("@/views/house/IndexView.vue"),
      redirect: "/house/houseView",
      children: [
        {
          path: "/house/houseView",
          name: "HouseView",
          component: () => import("@/views/house/HouseView.vue"),
        },
      ],
    },
    {
      path: "/tool",
      name: "tool",
      component: () => import("@/views/tool/IndexView.vue"),
      children: [
        {
          path: "/tool/ExcelPage",
          name: "ExcelPage",
          component: () => import("@/views/tool/ExcelPage.vue"),
        },
      ],
    },
  ],
});

export default router;
