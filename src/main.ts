import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import Element from 'element-plus'
import 'virtual:windi.css'

createApp(App).use(router).use(Element).mount('#app')
