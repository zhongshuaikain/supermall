import Vue from 'vue'
import VueRouter from "vue-router";
const home = () => import('../views/home/home')
const classify = () => import('../views/classify/classify')
const car = () => import('../views/car/car')
const mine = () => import('../views/mine/mine')
Vue.use(VueRouter);
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/car',
    component: car
  }, {
    path: '/classify',
    component: classify
  },
  {
    path: '/mine',
    component: mine
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
