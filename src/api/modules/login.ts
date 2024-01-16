import { Login } from "@/api/interface";
import http from "@/api/request"

export const loginApi = (params:Login.ReqLoginForm) =>{
    return http.post<Login.ResLogin>("/login",params)
}