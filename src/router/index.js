import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user-products',
    name: 'UserProducts',
    component: () => import('../views/UserProducts.vue'),
    children: [
      {
        // list
        path: '',
        component: () => import('../views/Brands.vue')
      },
      {
        // 內頁 :參數的意思
        path: 'product',
        component: () => import('../views/UserProduct.vue')
      }
    ]
  },
  {
    // 購物車
    path: '/cart',
    component: () => import('../views/UserCart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
