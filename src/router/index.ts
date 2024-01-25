import { createRouter, createWebHistory } from "vue-router";
import { LOGIN_URL, ROUTER_WHITE_LIST } from "@/config/config";
import NProgress from "@/config/nprogress";
import { GlobalStore } from "@/store";

let commonRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
];

let dynamicRoutes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home.vue"),
      },
      {
        path: "/gsap",
        name: "GSAP",
        children: [
          {
            path: "/gsap/scrollChangePhoneColor",
            name: "ScrollChangePhoneColor",
            component: () => import("@/views/gsap/scrollChangePhoneColor/index.vue"),
          },{
            path: "scroll/verticalImage",
            name: "ScrollVerticalImage",
            component: () => import("@/views/gsap/scroll/verticalImage.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...commonRoutes, ...dynamicRoutes],
});

// 路由拦截

router.beforeEach((to, from, next) => {
  NProgress.start();

  const globalStore = GlobalStore();

  if (to.path === LOGIN_URL) {
    // if (globalStore.token) return next(from.fullPath);
    // resetRouter();
    return next();
  }

  if (!globalStore.token) {
    next({ path: LOGIN_URL, replace: true });
    return;
  }

  next();
});

router.afterEach((to, from, next) => {
  NProgress.done();
});

export default router;
