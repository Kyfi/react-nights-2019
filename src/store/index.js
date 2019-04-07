import { createStore, combineReducers } from 'redux'

import products from './products'
import product from './product'
import cartItems from './cartItems'

const reducer = combineReducers({
  products,
  product,
  cartItems,
})

const store = createStore(reducer)

export default store
