import { createRouter, createWebHistory } from 'vue-router'
import miao_text_generator from '../components/miao_text_generator.vue'

const routes = [
  {
    path: '/',
    name: 'miao_text_generator',
    component: miao_text_generator,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
