import request from "@/api/request";

export function getImageCaptcha(params?: API.CaptchaParams) {
  return request<API.CaptchaResult>({
    url: "captcha/img",
    method: "get",
    params,
  });
}
