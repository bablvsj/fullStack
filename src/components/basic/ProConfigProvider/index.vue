<template>
  <ConfigProvider :theme="theme">
    <slot></slot>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { configProviderProps } from "ant-design-vue/es/config-provider/context";

const props = defineProps(configProviderProps());

const theme = computed(() => {
  return props.theme;
});
</script>
