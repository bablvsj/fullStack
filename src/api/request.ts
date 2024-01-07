import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  AxiosInstance,
} from "axios";
import { ResultEnum } from "@/enums/requestEnum";

const config = {
  baseUrl: import.meta.env.VITE_API_URL,
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时允许携带凭证
  withCredentials: true,
};

class Request {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)
  }
}

export default new Request(config);
