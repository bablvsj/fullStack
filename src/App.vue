<template>
  <ProConfigProvider>
    <a-spin :spinning="loadingStore.loadingStatus" :tip="loadingStore.loadingText">
      <router-view></router-view>
    </a-spin>
  </ProConfigProvider>
</template>

<script setup lang="ts">
import { LoadingStore } from '@/store/modules/loading'
const loadingStore = LoadingStore()
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
