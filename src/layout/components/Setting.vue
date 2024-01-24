<template>
  <!-- <SettingOutlined @click="showDrawer" /> -->
  <LogoutOutlined class="cursor-point" @click="logout" />
  <!-- <Drawer v-model:open="visible" placement="right" :closable="false">
    <Descriptions title="整体风格" :column="5">
      <Descriptions.Item v-for="theme in themeStyle" :key="theme.value">
        <Tooltip :title="theme.label">
          <div
            class="style-checbox-item"
            :class="{ active: layoutSetting.navTheme === theme.value }"
            @click="setNavTheme(theme.value)"
          >
            <svg-icon :name="theme.value" size="50"></svg-icon>
          </div>
        </Tooltip>
      </Descriptions.Item>
    </Descriptions>
    <Descriptions title="主题色" :column="9">
      <Descriptions.Item v-for="item in themeColors" :key="item.key">
        <div class="style-checbox-item">
          <Tooltip :title="item.title">
            <Tag :color="item.value" @click="setThemeColor(item.value)">
              <span :style="{ visibility: getThemeColorVisible(item.value) }">
                ✔
              </span>
            </Tag>
          </Tooltip>
        </div>
      </Descriptions.Item>
      <Descriptions.Item key="custom">
        <div class="style-checbox-item">
          <Tooltip title="自定义">
            <Tag :color="customColor" class="relative overflow-hidden">
              <input
                v-model="customColor"
                type="color"
                class="absolute inset-0"
                :style="colorPickerStyle"
                @input="setThemeColor(customColor!)"
              />
              <span :style="{ visibility: getThemeColorVisible(customColor) }">
                ✔
              </span>
            </Tag>
          </Tooltip>
        </div>
      </Descriptions.Item>
    </Descriptions>
    <Descriptions title="导航模式" :column="5">
      <Descriptions.Item v-for="item in layouts" :key="item.value">
        <div
          class="style-checbox-item"
          :class="{ active: layoutSetting.layout === item.value }"
          @click="setLayout(item.value)"
        >
          <svg-icon :name="item.value" size="50"></svg-icon>
        </div>
      </Descriptions.Item>
    </Descriptions>
  </Drawer> -->
</template>

<script lang="ts" setup>
// import { ref } from "vue";
import { LogoutOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.clear();
  router.replace("/login");
};

</script>

<style lang="less" scoped>
.style-checbox-item {
  position: relative;
  cursor: pointer;

  &.active::after {
    content: "✔";
    position: absolute;
    right: 12px;
    bottom: 10px;
    // color: @primary-color;
  }
}

input[type="color"] {
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  outline: none;
  appearance: none;

  &::-webkit-color-swatch-wrapper {
    background: var(--custom-color);
  }

  &::-webkit-color-swatch {
    display: none;
  }
}
</style>
