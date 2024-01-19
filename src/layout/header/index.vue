<template>
  <a-layout-header :style="headerStyle" class="layout-header">
    <a-space :size="spaceSize">
      <FullScreen />
      <Setting />
      <SystemTheme :theme="theme" />
    </a-space>
    <!-- <a-space :size="spaceSize"></a-space> -->
  </a-layout-header>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store";
import { computed, type CSSProperties } from "vue";
import FullScreen from "../components/FullScreen.vue";
import Setting from "../components/Setting.vue";
import SystemTheme from "../components/SystemTheme.vue";

const globalStore = GlobalStore();
const { layout } = globalStore.themeConfig;
const theme = computed(() => globalStore.themeConfig.theme);

const headerStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === "dark";
  return {
    backgroundColor: isDark ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.85)",
    color: isDark ? "rgba(255, 255, 255, 0.85)" : "",
  };
});

const spaceSize = ref(10);
</script>

<style>
.layout-header {
  width: 100%;
  /* display: flex;
        justify-content: flex-end; */
  text-align: end;
}
</style>
