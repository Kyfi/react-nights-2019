import { createStore, combineReducers } from 'redux'

import cart from './cart/reducer'
import customer from './customer/reducer'

const reducer = combineReducers({
  cart,
  customer,
})

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
