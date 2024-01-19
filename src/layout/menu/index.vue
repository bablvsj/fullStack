<template>
  <a-menu v-model:selectedKeys="selectedKeys" :theme="theme" mode="inline" >
    <a-menu-item key="1">
      <user-outlined />
      <span class="nav-text">nav 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <video-camera-outlined />
      <span class="nav-text">nav 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <upload-outlined />
      <span class="nav-text">nav 3</span>
    </a-menu-item>
    <a-menu-item key="4">
      <user-outlined />
      <span class="nav-text">nav 4</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store";
import { ref } from "vue";
const selectedKeys = ref<string[]>(["4"]);
const globalStore = GlobalStore();

const theme = computed(() => globalStore.themeConfig.theme);
</script>
