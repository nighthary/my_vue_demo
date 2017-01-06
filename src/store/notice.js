
import * as types from './mutation-type'

const state = {
  show: false,
  options: {
    autoClose: false,
    content: 'notice content'
  }
}

const mutations = {
  [types.NEW_NOTICE] (state, options) {
    state.show = true
    state.options = options
  },
  [types.CLOSE_NOTICE] (state, options) {
    state.show = false
    state.options = options
  }
}
export default {
  state: state,
  mutations: mutations
}
