import { createRouter, createWebHashHistory } from "vue-router";
import index from "@/components/index.vue";
import Login from "@/components/Login.vue";

const routes = [
    { path: "/", name: "Index", component: index },
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
    {
        path: "/login",
        name: "Login",
        component: Login,
        beforeEnter(to, from) {
            console.log('路由内守卫', {
                to,
                from,
            });
        }
    },
    {
        path: "/logout",
        name: "Logout",
        component: () => import("@/components/Logout.vue"),
    },
    {
        path: "/upload",
        name: "Upload",
        component: () => import("@/components/Upload.vue"),
    },
];
  
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
// 导航守卫
router.beforeEach((to, from, next) => {
    const needUsers = [ 'User', 'Index' ];
    if(needUsers.includes(to.name) && !localStorage.getItem('userInfo')) {
        next({
            name: 'Login',
        });
    } else if(to.name === 'Login' && localStorage.getItem('userInfo')) {
        next({
            name: 'Index',
        });
    } else {
        next();
    }
});
router.beforeResolve((to, from, next) => {
    if(to.name === 'Upload' && from.name !== 'User') {
        next(false);
    } else {
        next();
    }
})
// router.afterEach((to, from) => {
// })

export default router;