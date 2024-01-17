<template>
  <a-layout-header :style="headerStyle" class="layout-header">
    <a-space>
      <FullScreen />
    </a-space>

    <a-space><Setting /></a-space>
  </a-layout-header>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store";
import { computed, type CSSProperties } from "vue";
import FullScreen from "../components/FullScreen.vue";
import Setting from "../components/Setting.vue";

const globalStore = GlobalStore();

const headerStyle = computed<CSSProperties>(() => {
  const { navTheme, layout } = globalStore.themeConfig;
  const isDark = navTheme === "dark" && layout === "topmenu";
  return {
    backgroundColor:
      navTheme === "realDark" || isDark ? "" : "rgba(255, 255, 255, 0.85)",
    color: isDark ? "rgba(255, 255, 255, 0.85)" : "",
  };
});
</script>

<style>
    .layout-header{
        width: 100%;
        display: flex;
    }
</style>
