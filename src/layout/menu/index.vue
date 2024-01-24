<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    :theme="theme"
    mode="inline"
    :collapsed="collapsed"
    :items="items"
    @click="handleClick"
  >
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
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons-vue";
import { GlobalStore } from "@/store";
import { ref } from "vue";
const selectedKeys = ref<string[]>(["4"]);
const globalStore = GlobalStore();

import { useRouter } from "vue-router";

// const route = useRoute();
const router = useRouter();

defineProps({
  collapsed: {
    type: Boolean,
  },
});

const theme = computed(() => globalStore.themeConfig.theme);

const current = ref<string[]>(["/home"]);

const items = ref([
  {
    key: "/",
    icon: () => h(UserOutlined),
    label: "Home",
    title: "Home",
    url: "/",
  },
  // {
  //   key: "/product",
  //   label: "产品",
  //   title: "Navigation Two",
  // },
  {
    key: "/gsap/scrollChangePhoneColor",
    url: "/gsap/scrollChangePhoneColor",
    icon: () => h(UploadOutlined),
    label: "GSAP",
    title: "GSAP",
  },
]);

const handleClick = (e: any) => {
  let url = e.item.url;
  if (url) {
    router.push(url);
  }
};
</script>
