import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-import.d.ts",
    }),
    Components({
      dts: "src/components.d.ts",
    }),
  ],
  resolve:{
    alias:{
      "@":resolve("./src")
    }
  }
});
