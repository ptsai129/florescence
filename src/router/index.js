import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue') // 前台 首頁
      },
      {
        path: 'about',
        component: () => import('../views/AboutUs.vue') // 前台 關於我們
      },
      {
        path: 'shopflowers',
        component: () => import('../views/ShopFlowers.vue') // 前台 選購花禮
      },
      {
        path: 'faq',
        component: () => import('../views/FrequentlyAskedQuestions.vue')// 前台 訂花需知
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active' // Bootstrap
})

export default router
