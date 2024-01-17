import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  AxiosInstance,
} from "axios";
// import { fullScreenLoading } from "@/config/serviceLoading";
// import { showLoading, hideLoading } from "@/config/serviceLoading";
import { ResultEnum } from "@/enums/requestEnum";
import { GlobalStore } from "@/store";
import { LoadingStore } from "@/store/modules/loading";
import { ResultData } from "@/api/interface";
import { message, Spin } from "ant-design-vue";
import router from "@/router";
import { LOGIN_URL } from "@/config/config";
import { checkStatus } from "./helper/checkStatus";

import { h, render } from "vue";

const config = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时允许携带凭证
  withCredentials: true,
};

let needLoadingRequestCount = 0;

const renderDom = () => {
  return Spin;
};

function showFullScreenLoading() {
  //添加loading
  if (needLoadingRequestCount === 0) {
    // store.dispatch(OpenPageLoading())
    var dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);

    const iconCopy = h(renderDom);

    render(iconCopy, dom);
  }
  needLoadingRequestCount++;
}

function tryHideFullScreenLoading() {
  //删除loading
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    // store.dispatch(ClosePageLoading())
    document.body.removeChild(document.getElementById("loading"));
  }
}

class Request {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config); // 实例化axios

    this.service.interceptors.request.use(
      (config: any) => {
        console.log(config);
        const globalStore = GlobalStore();
        // 如果当前请求不需要显示loading，在api服务中通过指定第三个参数：{headers:{"noLoading:true"}} 来控制不显示loading，参见loginApi
        config.headers?.loading && LoadingStore().show();
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
        console.log(response);
        LoadingStore().hide();

        const { data } = response;
        const globalStore = GlobalStore();

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
        LoadingStore().hide();
        if (error.message.indexOf("timeout") !== -1)
          message.error("请求超时！请您稍后重试");

        if (response) checkStatus(response.status);

        if (!window.navigator.onLine) router.replace("/500");
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }

  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }

  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object);
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object });
  }
  download(url: string, params?: object, _object = {}): Promise<BlobPart> {
    return this.service.post(url, params, _object);
  }
}

export default new Request(config);
