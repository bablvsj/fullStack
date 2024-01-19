<template>
  <ConfigProvider>
    <slot></slot>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { configProviderProps } from "ant-design-vue/es/config-provider/context";
import { GlobalStore } from "@/store";

// const props = defineProps(configProviderProps());

const globalStore = GlobalStore();
  // const { getAntdLocale } = useLocale();

  // const theme = computed(() => {
  //   return globalStore.themeConfig.theme
  // });

  // console.log(theme)

// const theme = computed(() => {
//   return props.theme;
// });
</script>
