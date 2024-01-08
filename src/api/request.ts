import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  AxiosInstance,
} from "axios";
import { showLoading, hideLoading } from "@/config/serviceLoading";
import { ResultEnum } from "@/enums/requestEnum";
import { GlobalStore } from "@/stores";
import { message } from "ant-design-vue";
import router from "@/routes";
import { LOGIN_URL } from "@/config/config";
import { checkStatus } from "./helper/checkStatus";

const config = {
  baseUrl: import.meta.env.VITE_API_URL,
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时允许携带凭证
  withCredentials: true,
};

class Request {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config); // 实例化axios

    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const globalStore = GlobalStore();
        // 如果当前请求不需要显示loading，在api服务中通过指定第三个参数：{headers:{"noLoading:true"}} 来控制不显示loading，参见loginApi
        config.headers!.noLoading || showLoading();
        const token: string = globalStore.token;
        return {
          ...config,
          headers: { ...config.headers, "x-access-token": token },
        };
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response;
        const globalStore = GlobalStore();
        hideLoading();

        if (data.code == ResultEnum.OVERDUE) {
          message.error(data.msg);
          globalStore.setToken("");
          router.replace(LOGIN_URL);
          return Promise.reject(data);
        }

        if (data.code && data.code !== ResultEnum.SUCCESS) {
          message.error(data.msg);
          return Promise.reject(data);
        }

        return data;
      },
      async (error: AxiosError) => {
        const { response } = error;
        hideLoading();
        if (error.message.indexOf("timeout") !== -1)
          message.error("请求超时！请您稍后重试");

        if (response) checkStatus(response.status);

        if (!window.navigator.onLine) router.replace("/500");
        return Promise.reject(error);
      }
    );
  }
}

export default new Request(config);
