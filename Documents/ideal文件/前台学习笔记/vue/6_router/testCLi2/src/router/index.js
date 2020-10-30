import Vue from 'vue'
import VueRouter from "vue-router";

// vue-router的路由懒加载

const index = function () {
  return import('../components/index');
}
const detail = () => import('../components/detail')
const detail_child1 = () => import('../components/detail_child1')
const detail_child2 = () => import('../components/detail_child2')
const profile = () => import('../components/Profile')
// 传统路由的加载形式是一次性全部加载所有的文件
// import index from '../components/index'
// import detail from '../components/detail';
// import detail_child1 from "../components/detail_child1";
// import detail_child2 from "../components/detail_child2";
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/goindex'
  },
  {
    path: '/goindex',
    component: index
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/godetail',
    component: detail,

    //配置子组件的映射路径
    children: [
      {
        path: '',
        redirect: '/detail_child2'
      },
      {
        path: '/detail_child1/:userid',
        component: detail_child1
      },
      {
        path: '/detail_child2',
        component: detail_child2
      }
    ]
  }
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'

})

export default router

