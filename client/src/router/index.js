import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

import AddEventPage from '../pages/AddEventPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path:'/event/add',
      name:'AddEventPage',
      component: AddEventPage
    },

  ]
})

export default router
