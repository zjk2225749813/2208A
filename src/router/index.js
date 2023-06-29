import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path:'login',
        name:'login',
        component:()=>import ('../views/Login.vue')
      }
    ]
  },
  {
    path:'/user/:id',
    name:'user',
    component:()=>import ('../views/UserView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 使用路由前置守卫跳转about时让他跳转到about/login页面
// 使用if来判进去的那个页面来进行跳转如果进入的是about就让他放行到about/login页面
// 如果不是就直接放行
router.beforeEach((to,from,next)=>{
  // if(to.name=='about'){
  //   next('/about/login')
  // }else{
  //   next()
  // }
  console.log(to);
  next()
})
// debugger
router.afterEach((to,from)=>{
  // console.log(to,'to');
  
  if(to.name=='about'){
    router.push('/about/login')
  }
})

export default router
