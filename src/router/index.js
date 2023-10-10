import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DaftarView from '../views/DaftarView.vue'
import ProfilView from '../views/ProfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beranda',
      component: HomeView
    },
    {
      path: '/masuk',
      name: 'masuk',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: DaftarView
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView
    }
  ]
})

export default router
