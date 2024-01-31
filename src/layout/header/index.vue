<template>
  <div class="layout-header" :style="headerStyle">
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
      <SystemTheme :theme="theme" />
      <Setting />
    </a-space>
    <!-- <a-space :size="spaceSize"></a-space> -->
  </div>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store";
import { computed, type CSSProperties } from "vue";
import FullScreen from "../components/FullScreen.vue";
import Setting from "../components/Setting.vue";
import SystemTheme from "../components/SystemTheme.vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { type MenuTheme } from "ant-design-vue";

const { collapsed } = defineProps({
  collapsed: {
    type: Boolean,
  },
  theme: {
    type: String as PropType<MenuTheme>,
  },
});

const emit = defineEmits(["update:collapsed"]);

const globalStore = GlobalStore();
const theme = computed(() => globalStore.themeConfig.theme);

const headerStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === "dark";
  return {
    color: isDark ? "rgba(255, 255, 255, 0.85)" : "",
    width: collapsed ? "calc(100% - 40px)" : "calc(100% - 200px)",
  };
});

const spaceSize = ref(10);
</script>

<style scoped lang="scss">
.layout-header {
  // padding: ;
  width: 100%;
  display: flex;
  padding: 0 20px;
  height: 40px;
  text-align: end;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
}
</style>
