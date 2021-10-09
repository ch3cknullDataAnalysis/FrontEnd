import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/pages/Index.vue'
import Predict from '@/pages/Predict.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/predict',
    name: 'predict',
    component: Predict,
  },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
