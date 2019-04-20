import { LOAD_PRODUCTS, CHANGE_PAGE_SIZE } from './actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload
    case CHANGE_PAGE_SIZE:
      return action.payload
    default:
      return state
  }
}

export default reducer
