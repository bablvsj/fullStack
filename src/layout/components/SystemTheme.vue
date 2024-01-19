<template>
  <div class="cursor-point theme-icons" @click="changeTheme">
    <img
      class="theme-icon"
      src="@/assets/images/icon/sun.png"
      v-if="theme == 'light'"
      alt=""
    />
    <img class="theme-icon" src="@/assets/images/icon/moon.png" alt="" v-else />
    <!-- <FullscreenExitOutlined v-else /> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { GlobalStore } from "@/store";
import { Storage } from "@/utils/Storage";

import { THEME_KEY } from "@/enums/cacheEnum";
import { themeColor, type ThemeColor } from "@/store/interface";
import { theme as antdTheme } from "ant-design-vue";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";

const globalStore = GlobalStore();
const theme = computed(() => globalStore.themeConfig.theme);

const changeTheme = () => {
  let themeData = "";
  themeData = theme.value === "light" ? "dark" : "light";
  globalStore.changeTheme(themeData);
};

export type LayoutSetting = {
  theme: ThemeColor; // theme for nav menu
  colorPrimary: string; // '#F5222D', // primary color of ant design
  layout: "sidemenu" | "topmenu"; // nav menu position: `sidemenu` or `topmenu`
  contentWidth: "Fluid" | "Fixed"; // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
  fixedHeader: false; // sticky header
  fixSiderbar: false; // sticky siderbar
  colorWeak: false;
  menu: {
    locale: true;
  };
  title: string;
  pwa: false;
  iconfontUrl: string;
  // production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true'
};

export const defaultSetting: LayoutSetting = {
  theme: "dark", // theme for nav menu
  colorPrimary: "#1677FF", // '#F5222D', // primary color of ant design
  layout: "sidemenu", // nav menu position: `sidemenu` or `topmenu`
  contentWidth: "Fluid", // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
  fixedHeader: false, // sticky header
  fixSiderbar: false, // sticky siderbar
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: "vite-antdv-admin",
  pwa: false,
  iconfontUrl: "",
  // production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
};

const localLayoutSetting = Storage.get<LayoutSetting>(THEME_KEY, {});

const layoutSetting = reactive({ ...defaultSetting, ...localLayoutSetting });

const themeConfig = reactive<ThemeConfig>({
  algorithm: themeColor[layoutSetting.theme!] || antdTheme.defaultAlgorithm,
  token: {
    colorPrimary: layoutSetting.colorPrimary,
  },
});


const getTheme = computed(() => {
  return layoutSetting.theme;
});

watchPostEffect(() => {
  if (layoutSetting.theme) {
    globalStore.toggleTheme(layoutSetting.theme);
  }
  if (layoutSetting.colorPrimary) {
    globalStore.setColorPrimary(layoutSetting.colorPrimary);
  }
  // 修改项目配置时自动同步到 localStorage
  Storage.set(THEME_KEY, layoutSetting);
});
</script>

<style scoped>
.theme-icons {
  height: 23px;
  display: flex;
  align-items: center;
}
.theme-icon {
  width: 18px;
  /* text-align: center;
    display: inline;
    padding: 2px; */
}
</style>
