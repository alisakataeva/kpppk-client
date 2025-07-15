import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import BlankPage from '@/views/BlankPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing,
    },
    {
      path: '/blank',
      name: 'blank',
      component: BlankPage,
    },
  ],
})

export default router
