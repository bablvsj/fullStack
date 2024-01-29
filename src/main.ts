import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./style.css";
import pinia from "@/store";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";

// Mock 数据引入
import Mock from "./mock";
Mock();


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App);
app.provide('$gsap', gsap)

app.use(Antd).use(router).use(pinia).mount("#app");
