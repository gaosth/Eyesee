import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import { echarts } from 'echarts'

Vue.prototype.$echarts = echarts

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App)

app.use(createPinia())
// app.use(router)
app.use(router,axios)

app.mount('#app')
