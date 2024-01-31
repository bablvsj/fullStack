<template>
  <a-layout class="layout">
    <!-- breakpoint="lg" -->
    <a-layout-sider
      class="layout-sider"
      :collapsed-width="asiderWidth"
      v-model:collapsed="collapsed"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" :class="collapsed ? 'logo-collapased' : ''">
        <img src="@/assets/images/logo.jpg" alt="" />
      </div>
      <Menu :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout-content
      :style="{ margin: '0' }"
      class="layout-right"
      :class="collapsed ? 'lr-collapased' : ''"
    >
      <Header v-model:collapsed="collapsed" />
      <div class="layout-content"><router-view /></div>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup name="Layout">
import { ref } from "vue";
import Menu from "./menu/index.vue";
import Header from "./header/index.vue";

const collapsed = ref<boolean>(true);

// 自定义侧边栏菜单收缩和展开时的宽度
const asiderWidth = computed(() => (collapsed.value ? 50 : 220));

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};
</script>
<style scoped lang="scss">
.layout {
  height: 100%;
  width: 100%;
}

.layout-right {
  flex: 1;
  height: 100%;
  padding-left: 200px;
}

.lr-collapased {
  padding-left: 50px;
}

.logo {
  background: #fff;
  padding: 5px 20px;

  img {
    width: 32px;
    border-radius: 50%;
  }
}

.layout-content {
  background: #edf1f7;
  height: 100%;
  width: 100%;
}

.logo-collapased {
  padding: 5px;
  text-align: center;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout-sub-header-background {
  // background: #141414;
}

:deep(.ant-layout) {
  .ant-layout {
    background: #fff;
  }
}
</style>

<style lang="scss">
.layout-sider {
  background: #fff !important;
  position: fixed !important;
  height: 100vh;
  top: 0;
  z-index: 999;
}

.dark {
  color: #fff;

  .logo {
    background: #001529 !important;
  }

  .layout-sider {
    background: #001529 !important;
  }

  .layout-content {
    background: #151a30;
  }
}
</style>
