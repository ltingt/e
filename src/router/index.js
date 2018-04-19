import Vue from 'vue'
import VueRouter from 'vue-router'

import Cart from '../pages/Cart/Cart.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Mine from '../pages/Mine/Mine.vue'
import Sort from '../pages/Sort/Sort.vue'
import SecondSort from '../pages/Sort/SecondSort/SecondSort.vue'
import FirstSort from '../pages/Sort/FirstSort/FirstSort.vue'
import ThirdSort from '../pages/Sort/ThirdSort/ThirdSort.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/homePage',
      component: HomePage,
      meta: {
        headerContent: false,
        footerContent: true
      }
    },
    {
      path: '/sort',
      component: Sort,
      children: [
        {
          path: '',
          redirect: '/sort/firstSort'
        },
        {
          path: '/sort/firstSort',
          component: FirstSort,
          meta: {
            headerContent: true,
            footerContent: true
          }
        },
        {
          path: '/sort/secondSort',
          component: SecondSort,
          /* 判断头部和底部是否可以显示 */
          meta: {
            headerContent: true,
            footerContent: true
          }
        },
        {
          path: '/sort/thirdSort',
          component: ThirdSort,
          meta: {
            headerContent: false,
            footerContent: false
          }
        }
      ]
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        headerContent: false,
        footerContent: false
      }
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
        headerContent: false,
        footerContent: false
      }
    }
  ]
})
