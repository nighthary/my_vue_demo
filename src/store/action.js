
import * as types from './mutation-type'

export const changeTabIndex = ({commit}, options) => {
  commit(types.TAB_HOME_INDEX, options)
}
