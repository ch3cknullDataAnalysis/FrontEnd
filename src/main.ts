import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Element from './libs/element'
import 'element-plus/packages/theme-chalk/lib/index.css'
import 'virtual:windi.css'

createApp(App).use(router).use(Element).mount('#app')
