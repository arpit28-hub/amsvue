import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import Dashboard from '@/views/Dashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainlayout',
      component: MainLayout,
      children:[
        {
          path:'',
          name:'dashboard',
          component: Dashboard,
        }

      ]
    },

  ],
})
export default router;
