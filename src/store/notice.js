
import * as types from './mutation-type'

const state = {
  show: false,
  homeTabIndex: 1
}

const mutations = {
  [types.TAB_HOME_INDEX] (state, homeTabIndex) {
    state.homeTabIndex = homeTabIndex
  }
}

const getters = {
  homeTabIndex: state => {
    return state.homeTabIndex
  }
}

export default {
  state: state,
  mutations: mutations,
  getters: getters
}
