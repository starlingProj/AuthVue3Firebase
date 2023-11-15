import { createRouter, createWebHistory } from 'vue-router'
import { AppLayoutsEnum } from '../layouts/layouts.types'
import {useAuthStore} from '@/store/AuthStore.js'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/auth',
          name: 'Auth',
          component: () => import('../pages/AuthTemplate.vue'),
          children: [
            {
              path: '/register',
              name: 'Registration',
              component: () => import('../components/Auth/Registration.vue')
            },
    
            {
              path: '/login',
              name: 'Login',
              component: () => import('../components/Auth/Login.vue')
            },
          ],
          meta: {
            layout: AppLayoutsEnum.empty,
            auth:false
          }
        },
        {
          path:'',
          name:'Home',
          component: () => import('../pages/Home.vue'),
          meta: {
            layout: AppLayoutsEnum.main,
          }
        },
        {
            path:'/info',
            name:'Info',
            component: () => import('../pages/InfoPage.vue'),
            meta: {
              layout: AppLayoutsEnum.main,
              auth:true
            }
          },
       
      ]
})

router.beforeEach((to,from,next)=>{
  const authStore = useAuthStore();
  if(to.meta.auth && !authStore.UserInfo.token){
    next('/register')
  } else if (!to.meta.auth && authStore.UserInfo.token){
    next()
  } else{
    next();
  }
})
export default router