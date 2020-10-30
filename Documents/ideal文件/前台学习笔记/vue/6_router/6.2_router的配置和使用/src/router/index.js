import home from "../components/home";
import index from "../components/index";
import Vue from 'vue'
import VueRouter from "vue-router";
// 使用路由
Vue.use(VueRouter);

// 步骤一：创建路由组件
const routes=[

  // 步骤二：配置路由和组件之间的映射关系
  {
    //启动时，路由路径为空，重定向到index路径下显示index模块的内容
    path: '',
    redirect:'/index'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/index',
    component:index
  },
// 使用路由：通过 <router-link> 和 <router-view>
]

const router=new VueRouter({
  routes,
  // 修改默认hash值路径的显示方式，更改为HTML5中的history路径显示模式
  mode:'history',
  linkActiveClass:'active'
})

export default router
