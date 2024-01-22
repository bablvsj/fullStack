<template>
  <a-layout-header :style="headerStyle" class="layout-header" >
    <a-space>
      <slot>
        <a-space :size="10">
          <span
            class="menu-fold cursor-point"
            @click="() => emit('update:collapsed', !collapsed)"
          >
            <component
              :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined"
            />
          </span>
          <!-- <Breadcrumb>
            <template
              v-for="(routeItem, rotueIndex) in menus"
              :key="routeItem?.name"
            >
              <Breadcrumb.Item>
                <TitleI18n :title="routeItem?.meta?.title" />
                <template v-if="routeItem?.children?.length" #overlay>
                  <Menu :selected-keys="getSelectKeys(rotueIndex)">
                    <template
                      v-for="childItem in routeItem?.children"
                      :key="childItem.name"
                    >
                      <Menu.Item
                        v-if="
                          !childItem.meta?.hideInMenu &&
                          !childItem.meta?.hideInBreadcrumb
                        "
                        :key="childItem.name"
                        @click="clickMenuItem(childItem)"
                      >
                        <TitleI18n :title="childItem.meta?.title" />
                      </Menu.Item>
                    </template>
                  </Menu>
                </template>
              </Breadcrumb.Item>
            </template>
          </Breadcrumb> -->
        </a-space>
      </slot>
    </a-space>
    <a-space :size="spaceSize">
      <FullScreen />
      <Setting />
      <SystemTheme :theme="theme" />
    </a-space>
    <!-- <a-space :size="spaceSize"></a-space> -->
  </a-layout-header>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store";
import { computed, type CSSProperties } from "vue";
import FullScreen from "../components/FullScreen.vue";
import Setting from "../components/Setting.vue";
import SystemTheme from "../components/SystemTheme.vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { type MenuTheme } from "ant-design-vue";

defineProps({
  collapsed: {
    type: Boolean,
  },
  theme: {
    type: String as PropType<MenuTheme>,
  },
});

const emit = defineEmits(["update:collapsed"]);

const globalStore = GlobalStore();
const { layout } = globalStore.themeConfig;
const theme = computed(() => globalStore.themeConfig.theme);

const headerStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === "dark";
  return {
    backgroundColor: isDark
      ? "#1a2138"
      : "rgba(255, 255, 255, 0.85)",
    color: isDark ? "rgba(255, 255, 255, 0.85)" : "",
  };
});

const spaceSize = ref(10);
</script>

<style scoped lang="scss">
.layout-header {
  width: 100%;
  display: flex;
  padding: 0 20px;
  height: 40px;
  text-align: end;
  justify-content: space-between;
}
</style>
