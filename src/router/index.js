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
        component: () => import('../views/FrontProducts.vue') // 前台 選購花禮
      },
      {
        path: 'product/:id',
        component: () => import('../views/FrontProduct.vue') // 前台 產品單一頁面
      },
      {
        path: 'faq',
        component: () => import('../views/FrontFaq.vue')// 前台 訂花需知
      },
      {
        path: 'cart',
        component: () => import('../views/FrontCart.vue')// 前台 購物車
      },
      {
        path: 'checkorder',
        component: () => import('../views/FrontCheckorder.vue')// 前台 訂單填寫
      },
      {
        path: 'payment/:orderedId',
        component: () => import('../views/FrontPayment.vue') // 前台 付款頁面
      },
      {
        path: 'favoriteproducts',
        component: () => import('../views/FrontFavProducts.vue')// 前台 蒐藏產品
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/AdminLogin.vue') // 後台登入
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'), // 後台
    children: [
      {
        path: '',
        component: () => import('../views/AdminProducts.vue') // 後台 產品管理
      },
      {
        path: 'order',
        component: () => import('../views/AdminOrders.vue') // 後台 訂單管理
      }
    ]
  },
  { // 代表所有 user 下的頁面，路由錯誤都會被導向首頁
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active', // Bootstrap
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('newPage')) {
      return {
        top: 0 // 在切換不同頁面時 仍會保持在最上面的位置
      }
    }
    return {}
  }
})

export default router
