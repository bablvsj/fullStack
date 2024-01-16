import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// import { wrapperEnv } from "./src/utils/getEnv";
// const viteEnv = wrapperEnv(env);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // console.log(env);
  console.log(env.VITE_PORT);
  console.log(env.VITE_OPEN);

  return {
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
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
    server: {
      // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
      // host: "0.0.0.0",
      // port: env.VITE_PORT,
      // open: env.VITE_OPEN,
      // cors: true,
      // hmf: true, //开启热更新
      // // 跨域代理配置
      // proxy: {
      //   "/api": {
      //     target: "localhost:8001", // easymock
      //     // target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ""),
      //   },
      // },

      host: "0.0.0.0",
			port: env.VITE_PORT,
			open: env.VITE_OPEN,
			cors: true,
			hmf: true, //开启热更新
			// 跨域代理配置
			proxy: {
				"/api": {
					target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
					// target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
    },
  };
});
