import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import CardForm from '../components/CardForm.vue'
import Nav from '@/views/Nav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/nav',
    name: 'nav',
    component: Nav
  },
  {
    path: '/',
    name: '',
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/cardform',
    name: 'cardform',
    component: CardForm
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
