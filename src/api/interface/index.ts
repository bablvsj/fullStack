export interface loginParams {
  name: string;
}

// 请求响应参数 (不含data)
export interface Result {
  code: string;
  msg: string;
}

//请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data: T;
}

export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }

  export interface ResLogin {
    token: string;
  }

  // export interface ResLogin {
  // 	access_token: string;
  // }
  // export interface ResAuthButtons {
  // 	[key: string]: string[];
  // }
}
