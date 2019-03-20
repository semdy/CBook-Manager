import { combineReducers } from 'redux'
import shopCart from './shopcart'
import recycles from './recycles'
import cartProducts from './cartProducts'
import orderProducts from './orderProducts'
import recycleDetail from './recycleDetail'
import history from './history'
import userInfo from './userInfo'

export default combineReducers({
  shopCart,
  recycles,
  cartProducts,
  orderProducts,
  recycleDetail,
  history,
  userInfo
})
