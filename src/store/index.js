import { createStore, combineReducers } from 'redux'

import products from './products'
import product from './product'
import cartItems from './cartItems'

const reducer = combineReducers({
  products,
  product,
  cartItems,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
