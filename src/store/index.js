import { createStore, combineReducers } from 'redux'

import cartItems from './cartItems'
import customer from './customer/reducer'

const reducer = combineReducers({
  cartItems,
  customer,
})

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
