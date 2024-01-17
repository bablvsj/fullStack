<template>
  <div class="login-box">
    <div class="login-content">
      <div class="login-logo">
        <!-- <svg-icon name="logo" :size="45" /> -->
        <img src="@/assets/images/logo.jpg" width="45" />
        <p class="mb-0 ml-2 text-3xl font-bold">Vue3 Antd Ts Vite</p>
      </div>
      <a-form
        ref="loginForm"
        layout="horizontal"
        :model="state.formInline"
        :rules="rules"
      >
        <a-form-item name="username">
          <a-input
            v-model:value="state.formInline.username"
            size="large"
            placeholder="rootadmin"
          >
            <template #prefix><user-outlined type="user" /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input
            v-model:value="state.formInline.password"
            size="large"
            type="password"
            placeholder="123456"
            autocomplete="new-password"
          >
            <template #prefix><lock-outlined type="user" /></template>
          </a-input>
        </a-form-item>
        <!-- <a-form-item name="verifyCode">
          <a-input
            v-model:value="state.formInline.verifyCode"
            placeholder="验证码"
            :maxlength="4"
            size="large"
          >
            <template #prefix><SafetyOutlined /></template>
            <template #suffix>
              <img
                :src="state.captcha"
                class="absolute right-0 h-full cursor-pointer"
                @click="setCaptcha"
              />
            </template>
          </a-input>
        </a-form-item> -->
        <a-form-item>
          <a-button
            type="primary"
            size="large"
            :loading="state.loading"
            @click="handleSubmit"
            block
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import {
  UserOutlined,
  LockOutlined,
  SafetyOutlined,
} from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";
import type { Rule } from "ant-design-vue/es/form";
import { message } from "ant-design-vue";
import { GlobalStore } from "@/store";

const loginForm = ref();

const state = reactive({
  loading: false,
  captcha: "",
  formInline: {
    username: "1111111",
    password: "2222222",
    verifyCode: "",
    captchaId: "",
  },
});

const route = useRoute();
const router = useRouter();

const rules: Record<string, Rule[]> = {
  username: [
    {
      required: true,
      message: "请输入账号",
      trigger: "change",
      type: "string",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
      type: "string",
    },
  ],
  verifyCode: [
    {
      required: false,
      message: "请输入密码",
      trigger: "change",
      type: "string",
    },
  ],
  captchaId: [
    {
      required: false,
      message: "请输入密码",
      trigger: "change",
      type: "string",
    },
  ],
};
const globalStore = GlobalStore();

// const setCaptcha = async () => {
//   const { id, img } = await getImageCaptcha({ width: 100, height: 50 });
//   state.captcha = img;
//   state.formInline.captchaId = id;
// };

const handleSubmit = () => {
  loginForm.value
    .validate()
    .then(() => {
     
      state.loading = true;
      globalStore.login(state.formInline).then((res) => {
        console.log(res);
        state.loading = false;
        message.success("登录成功！")
        router.replace((route.query.redirect as string) ?? "/")
      });

    })
    .catch(() => {});
};
</script>

<style lang="less" scoped>
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  // background: url("@/assets/images/bg.png");
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  background-size: cover;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 1;
  overflow: hidden;

  .login-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 3;
  }

  .login-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    .svg-icon {
      font-size: 48px;
    }

    img {
      border-radius: 50%;
    }

    p {
      font-size: 24px;
      margin: 0 10px;
      color: aliceblue;
    }
  }

  :deep(.ant-form) {
    min-width: 300px;

    .ant-col {
      width: 100%;
    }

    .ant-form-item-label {
      // padding-right: 6px;
    }
  }
}
</style>
