import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        layout: "admin",
      },
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('../views/CourseView.vue'),
      meta: {
        layout: "admin",
      },
    },
    {
      path: '/payment-method',
      name: 'payment-method',
      component: () => import('../views/PaymentMethodView.vue'),
      meta: {
        layout: "admin",
      },
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: () => import('../views/PurchaseView.vue'),
      meta: {
        layout: "admin",
      },
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/Community.vue'),
      meta: {
        layout: "admin",
      },
    },
    {
      path: '/community/:id',
      name: 'threaddetail',
      component: () => import('../views/components/ThreadDetail.vue'),
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
