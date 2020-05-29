import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Lotto from '@/views/Lotto'
import Lunch from '@/views/Lunch'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/lotto',
    name: 'Lotto',
    component: Lotto,
  },
  {
    path: '/lunch',
    name: 'Lunch',
    component: Lunch,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
