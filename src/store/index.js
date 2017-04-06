import Vue from 'vue'
import Vuex from 'vuex'
import notice from './notice'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    notice
  }
})
