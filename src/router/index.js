import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/pages/Auth/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/pages/Auth/SignUp.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router