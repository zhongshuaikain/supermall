import Vue from 'vue'
import VueRouter from 'vue-router'

const index = () => import('../components/Index')
const about = () => import('../components/About')
const user = () => import('../components/User')
const profile = () => import('../components/Profile')
const detail1 = () => import('../components/detail1')
const detail2 = () => import('../components/detail2')
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index,
    meta:{
      title:'index'
    }
  },
  {
    path: '/about',
    component: about,
    children: [
      {
        path: '/detail1/:userid',
        component: detail1,
        meta:{
          title:'detail1'
        }
      },
      {
        path: '/detail2',
        component: detail2
      }
    ],
    meta:{
      title:'about'
    }

  },
  {
    path: '/user',
    component: user,
    meta:{
      title:'user'
    }
  },
  {
    path: '/profile',
    component: profile,
    meta:{
      title:'profile'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
//导航守卫
router.beforeEach((to, from, next) => {
    next(),
    document.title=to.matched[0].meta.title;

})

export default router
