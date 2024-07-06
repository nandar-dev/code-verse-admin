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
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/forgot-pass',
      name: 'forgot-pass',
      component: () => import('../views/ForgotPassword.vue')
    },
    {
      path: '/otp',
      name: 'otp',
      component: () => import('../views/OTP.vue'),
    },
    {
      path: '/reset-pass',
      name: 'resetpass',
      component: () => import('../views/ResetPassword.vue'),
    }
  ]
})

export default router
