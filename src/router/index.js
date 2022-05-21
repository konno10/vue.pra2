import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: () => import('../views/Page2.vue')
  },
  {
    path: '/Page3',
    name: 'Page3',
    component: () => import('../views/Page3.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
