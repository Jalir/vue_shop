import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component: () => import('../components/HeaderNav/HeaderNav')
    component: () => import('../pages/InnerPage')
  },
  {
    path: '/search',
    component: () => import('../pages/SearchPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
