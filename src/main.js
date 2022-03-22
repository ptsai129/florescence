import { createApp } from 'vue'
// 載入bootstrap & bootstrap icon在全域使用
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// importing AOS css style globally
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
