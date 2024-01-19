<template>
  <a-layout class="layout">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo">
        <img src="@/assets/images/logo.jpg" alt="" />
      </div>
      <Menu />
    </a-layout-sider>
    <a-layout-content :style="{ margin: '0' }" class="layout-content">
      <Header />
      <div :style="{ padding: '10px', background: '#fff', minHeight: '360px' }">
        content
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import Menu from "./menu/index.vue";
import Header from "./header/index.vue";
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};
</script>
<style scoped lang="scss">
.layout {
  height: 100vh;
  width: 100vw;
  display: flex;
}

.layout-content {
  flex: 1;
}

.logo {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 20px;

  img {
    width: 32px;
    border-radius: 50%;
  }
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}
</style>
