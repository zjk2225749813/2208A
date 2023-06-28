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
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

// 全局前置守卫  beforeEach
// router.beforeEach((to,from,next)=>{
//   if(to.name=='login'){
//     console.log('前往login');
//   }else {
//     console.log('其他');
//    }
// })


// 全局解析守卫 afterEach  和前置守卫差不多
// router.beforeResolve((to,from,next)=>{
//     if(to.name=='login'){
//     console.log('前往login,解析守卫');
//   }else {
//     console.log('其他解析守卫');
//    }
// })


// 全局后置守卫  
// router.afterEach((to,from,next)=>{
//   if(to.name=='login'){
//   console.log('前往login,后置守卫');
// }else {
//   console.log('其他后置守卫');
//  }
// })

export default router
