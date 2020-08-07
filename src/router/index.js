import Vue from 'vue'
import VueRouter from 'vue-router'
import Excerpt from '../views/Excerpt.vue'
import My from '../views/My.vue'
import ExcerptDeil from '../views/ExcerptDeil.vue'
import Member from '../views/Member.vue'
import About from '../views/About.vue'
import Recommend from '../views/Recommend.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Excerpt
  },
  {
    path: '/excerpt',
    name: 'excerpt',
    component: Excerpt
  },
  {
    path: '/excerptDeil',
    name: 'excerptDeil',
    component: ExcerptDeil
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },{
    path:'/member',
    name: '/member',
    component: Member
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
