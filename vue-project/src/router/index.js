import { createRouter, createWebHistory } from 'vue-router'
import mainlayout from '@/layout/MainLayout.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import signIn from '@/components/authentication/signIn.vue'
import signUp from '@/components/authentication/signUp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      children: [
        { path: '', name: 'signin', component: signIn },
        { path: 'signUp', name: 'signup', component: signUp },
      ],
    },
    {
      path: '/mainlayout',
      name:'mainlayout',
      component: mainlayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard,
        },
      ],
    },
  ],
})
export default router
