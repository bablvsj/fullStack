<template>
  <span class="cursor-point fullscreen-btn" @click="toggleFullScreen">
    <FullscreenOutlined v-if="!isFull" />
    <FullscreenExitOutlined v-else />
  </span>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import {
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons-vue";

let isFull = ref(false);

onMounted(() => {
  isFull.value = document.fullscreenElement ? true : false;
});

const toggleFullScreen = () => {
  isFull.value = !isFull.value;

  const element = document.getElementById("app");
  if (element) {
    document.fullscreenElement
      ? document.exitFullscreen()
      : element.requestFullscreen();
  }
};
</script>

<style scoped>
.fullscreen-btn {
  width: 20px;
  text-align: center;
  display: inline;
  padding: 2px;
}
</style>
