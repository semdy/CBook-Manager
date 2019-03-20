import { handleActions } from 'redux-actions'

const defaultState = {}

export default handleActions({
  ADD_RECYCLE_DETAIL (state, { payload }) {
    return {...payload}
  },
  CLEAR_RECYCLE_DETAIL () {
    return {}
  }
}, defaultState)
