<template>
  <a-layout class="layout">
    <a-layout-sider
      class="layout-sider"
      breakpoint="lg"
      :collapsed-width="asiderWidth"
      v-model:collapsed="collapsed"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" :class="collapsed ? 'logo-collapased' : ''">
        <img src="@/assets/images/logo.jpg" alt="" />
      </div>
      <Menu :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout-content :style="{ margin: '0' }" class="layout-right">
      <Header v-model:collapsed="collapsed" />
      <div class="layout-content"><router-view /></div>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup name="Layout">
import { ref } from "vue";
import Menu from "./menu/index.vue";
import Header from "./header/index.vue";

// const onCollapse = (collapsed: boolean, type: string) => {
//   console.log(collapsed, type);
// };

const collapsed = ref<boolean>(false);
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
  // display: flex;
  overflow: hidden;
}

.layout-right {
  flex: 1;
  height: 100%;
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
  padding: 10px;
  background: #edf1f7;
  height: calc(100% - 40px);
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  &::-webkit-scrollbar {
    width: 4px;
    height: 16px;
    background-color: #f5f5f5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  // &::-webkit-scrollbar-track {
  //   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  //   border-radius: 2px;
  //   background-color: #f5f5f5;
  // }

  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(122, 120, 120);
  }
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
}

.dark {
  color: #fff;

  .logo {
    background: #001529 !important;
  }

  .layout-sider {
    background: #001529 !important;
  }

  .layout-container {
    background: #151a30;
  }
}
</style>
