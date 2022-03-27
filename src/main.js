import { createApp } from 'vue'
// 載入bootstrap & bootstrap icon在全域使用
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
// 載入vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// importing AOS css style globally
import AOS from 'aos'
import 'aos/dist/aos.css'
//* 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
//* 匯入 vee-validate 相關規則
import { required, email, min, max, numeric } from '@vee-validate/rules'
// change the locale using setLocale
import { localize, setLocale } from '@vee-validate/i18n'
// import the locales from i18n JSON directory
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// 載入sweetalert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import App from './App.vue'
import router from './router'

//* 滾動視差初始化
AOS.init({ })

// Define the rule globally
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('numeric', numeric)

configure({
  generateMessage: localize({ zh_TW: zhTW }), // import tranditional Chinese
  validateOnInput: true // validate info while inputing
})
// set the default language
setLocale('zh_TW')

const app = createApp(App)
app.use(VueAxios, axios)
// 註冊全域的表單驗證元件
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(VueSweetalert2)
app.use(router)
app.mount('#app')
