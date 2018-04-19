import Vue from 'vue'

import app from './App.vue'
import router from './router/index'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
