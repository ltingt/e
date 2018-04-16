import Vue from 'vue'
import VueRouter from 'vue-router'

import Cart from '../pages/Cart/Cart.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Mine from '../pages/Mine/Mine.vue'
import Sort from '../pages/Sort/Sort.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      component: HomePage
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    }
  ]
})
