// 响应结果Code枚举配置
export enum ResultEnum {
    SUCCESS = 200,
    ERROR = 500,
    OVERDUE = 599,
    TIMEOUT = 1000,
    Ttpe = "success"
}

// 请求方法枚举
export enum RequestEnum {
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE"
}

// 常见的content-type类型
export enum ContentTypeEnum {
    JSON = "application/json;charset=UTF-8",
    TEXT = "text/plain;charset=UTF-8",
    FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",  // 一般配合qs
    FORM_DATA = "multipart/form-data;charset=UTF-8"  // 一般是文件
}