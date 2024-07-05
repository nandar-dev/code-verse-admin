import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        layout: "admin",
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: "admin",
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
   
    }
  ]
})

export default router
