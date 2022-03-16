import { createApp } from 'vue'
// 載入bootstrap & bootstrap icon在全域使用
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
