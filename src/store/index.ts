import { createPinia, defineStore } from "pinia";
import { GlobalState, ThemeConfigProps } from "./interface";
import { DEFAULT_PRIMARY } from "@/config/config";
import piniaPersistConfig from "@/config/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { loginApi } from "@/api/modules/login";
import { Login } from "@/api/interface";
// import { type ThemeColor } from "@/store/interface";

import { Storage } from "@/utils/Storage";

import { THEME_KEY } from "@/enums/cacheEnum";
import { themeColor, type ThemeColor } from "@/store/interface";
// import { theme as antdTheme } from "ant-design-vue";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";

interface LayoutSetting {
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
}

const defaultSetting: LayoutSetting = {
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

export const GlobalStore = defineStore("GlobalState", {
  state: (): GlobalState => ({
    token: "",
    userInfo: "",
    assemblySize: "default", //antd 组件大小
    themeConfig: {
      // 布局切换 ==>  纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns
      layout: "vertical",
      primary: DEFAULT_PRIMARY,
      isDark: false,
      isGrey: false,
      isCollapse: false,
      isWeak: false,
      breadcrumb: false,
      breadcrumbIcon: false,
      tabs: false,
      tabsIcon: false,
      footer: false,
      maximize: false,
      theme: "light",
      algorithm: themeColor["light"],
      colorPrimary: defaultSetting.colorPrimary,
    },
    theme: "light",
    layoutSetting: { ...defaultSetting, ...localLayoutSetting },
  }),
  actions: {
    login(params: Login.ReqLoginForm) {
      return new Promise((resolve, reject) => {
        loginApi(params)
          .then((res) => {
            this.setToken(res.token);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setToken(token: string) {
      this.token = token;
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    },
    setAssemblySizeSize(assemblySize: string) {
      this.assemblySize = assemblySize;
    },
    updateLanguage(language: string) {
      this.language = language;
    },
    setThemeConfig(themeConfig: ThemeConfigProps) {
      this.themeConfig = themeConfig;
    },
    changeTheme(theme: string) {
      this.themeConfig.theme = theme;
    },
    toggleTheme() {
      console.log(this.theme);
      if (this.themeConfig.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    setColorPrimary(theme: string) {
      this.themeConfig.colorPrimary = theme;
    },
  },
  persist: piniaPersistConfig("GlobalState"),
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
