import Vue from 'vue'
import Vuex from 'vuex'
import notice from './notice'
// import * as actions from './action'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // actions,
  modules: {
    notice
  }
})
