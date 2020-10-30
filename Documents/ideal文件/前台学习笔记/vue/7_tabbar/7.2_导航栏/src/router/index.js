import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home/home')
const car = () => import('../views/car/car')
const classify = () => import('../views/classify/classify')
const my = () => import('../views/my/my')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "",
      redirect:'/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/car',
      component: car
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/my',
      component: my
    }
  ],
  mode: 'history'
})

