import NProgress from "nprogress";
import "nprogress/nprogress.css"

NProgress.configure({
    easing:"ease",
    speed:500,
    showSpinner:true, // 是否显示加载 icon
    trickleSpeed:200, // 自动递增间隔
    minimum:0.3 // 初始时的最小百分比
})

export default NProgress
