import { handleActions } from 'redux-actions'

const defaultState = []

export default handleActions({
  ADD_ORDER_PRODUCTS (state, { payload }) {
    return [
      ...payload.products
    ]
  },
  CLEAR_ORDER_PRODUCTS () {
    return []
  }
}, defaultState)
