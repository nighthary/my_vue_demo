
import * as types from './mutation-type'

export const newNotice = ({commit}, options) => {
  commit(types.NEW_NOTICE, options)
}
export const closeNotice = ({commit}) => {
  commit(types.CLOSE_NOTICE)
}
