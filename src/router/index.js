import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Top from '@/components/Top'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import Output from '@/components/Output'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  // },
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  },
  {
    path: '/output',
    name: 'Output',
    component: Output
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
