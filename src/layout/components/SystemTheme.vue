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

const globalStore = GlobalStore();
const theme = computed(() => globalStore.themeConfig.theme);

const changeTheme = () => {
  let themeData = "";
  themeData = theme.value === "light" ? "dark" : "light";
  globalStore.changeTheme(themeData);
};
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
