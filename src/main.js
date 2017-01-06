
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store/'
import routes from './routers';

import App from './App'

Vue.use(VueResource)
Vue.use(VueRouter)

// 实例化VueRouter
const router = new VueRouter({
    mode: 'history',
    routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
