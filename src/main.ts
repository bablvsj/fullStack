import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/reset.css"
import './style.css'
import pinia from '@/stores'


const app = createApp(App)

app.use(Antd).use(router).use(pinia).mount('#app')
