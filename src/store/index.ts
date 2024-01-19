import { createPinia, defineStore } from "pinia";
import { GlobalState, ThemeConfigProps } from "./interface";
import { DEFAULT_PRIMARY } from "@/config/config";
import piniaPersistConfig from "@/config/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { loginApi } from "@/api/modules/login";
import { Login } from "@/api/interface";
import { Storage } from "@/utils/Storage";

import { THEME_KEY } from "@/enums/cacheEnum";
import { themeColor, type ThemeColor } from "./interface";
import { theme as antdTheme } from "ant-design-vue";
import { ThemeConfig } from "ant-design-vue/es/config-provider/context";

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
    },
    theme: "light",
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
    toggleTheme(theme: ThemeColor) {
      if (this.theme === "realDark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // themeConfig.algorithm = themeColor[theme];
    },
    setColorPrimary(theme: string) {
      this.themeConfig.theme = theme;
    },
  },
  persist: piniaPersistConfig("GlobalState"),
});



const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
