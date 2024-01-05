import { createRouter, createWebHistory } from "vue-router";
import {LOGIN_URL,ROUTER_WHITE_LIST } from "@/config/config"
import NProgress from "@/config/nprogress"

let routes = [{
    path: "/home",
    name: "Home",
    component: () => import("@/views/home.vue")
},
{
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue")
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})


// 路由拦截

router.beforeEach((to,from,next)=>{
    NProgress.start();

    let token = localStorage.getItem("b-token")

    if (to.path === LOGIN_URL) {
		// if (globalStore.token) return next(from.fullPath);
		// resetRouter();
		return next();
	}

    if(!token){
        next({path:LOGIN_URL,replace:true})
        return;
    }
})

router.afterEach((to,from,next)=>{
    NProgress.done()
})

export default router;

