import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comments',
    name: 'Comments',
    component: () => import('../views/Comments.vue')
  },
  {
    path: '/ask',
    name: 'Ask',
    component: () => import('../views/Ask.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../views/Jobs.vue')
  },
  {
    path: '/best',
    name: 'Best',
    component: () => import('../views/Best.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
