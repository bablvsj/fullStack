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
// import { themeColor, type ThemeColor } from "@/store/interface";
// // import { theme as antdTheme } from "ant-design-vue";
// import { ThemeConfig } from "ant-design-vue/es/config-provider/context";

const globalStore = GlobalStore();
const theme = computed(() => globalStore.themeConfig.theme);

const changeTheme = () => {
  let themeData = "";
  themeData = theme.value === "light" ? "dark" : "light";
  globalStore.changeTheme(themeData);
};





// const themeConfig = reactive<ThemeConfig>({
//   algorithm: themeColor[layoutSetting.theme!],
//   token: {
//     colorPrimary: layoutSetting.colorPrimary,
//   },
// });

// const getTheme = computed(() => {
//   return layoutSetting.theme;
// });

watchPostEffect(() => {
  if (globalStore.themeConfig.theme) {

    console.log(globalStore.themeConfig.theme)
    globalStore.toggleTheme();
    // globalStore.themeConfig.algorithm = themeColor[layoutSetting.theme];
  }
  if (globalStore.layoutSetting.colorPrimary) {
    globalStore.setColorPrimary(globalStore.layoutSetting.colorPrimary);
  }
  // 修改项目配置时自动同步到 localStorage
  Storage.set(THEME_KEY, globalStore.layoutSetting);
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
