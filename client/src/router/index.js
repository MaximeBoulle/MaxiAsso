import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Test from '../pages/Test.vue'
import SignInPage from '../pages/SignInPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/test',
      name: 'test',
      component: Test
    },

    {
      path:'/SignInPage',
      name:'SignInPage',
      component: SignInPage
    },

    {
      path: '/SignUpPage',
      name: 'SignUpPage',
      component: SignUpPage
    },
    /*{
      path:'/account/log_in',
      name: 'account_log',
      component : LoginPage
    },
    {
      path:'/account/sign_up',
      name: 'account_signup',
      component : SignUpPage
    },
    {
      path:'/room/:id',
      name:'room_information',
      component: RoomPage
    },
    {
      path:'/my_reservation',
      name: 'my_reservation',
      component: MyReservationPage
    }*/
  ]
})

export default router
