import { createStore, combineReducers } from 'redux'

import products from './products'
import product from './product'
import cartItems from './cartItems'
import customer from './customer/reducer'

const reducer = combineReducers({
  products,
  product,
  cartItems,
  customer,
})

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
