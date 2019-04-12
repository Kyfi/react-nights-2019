import { LOAD_PRODUCT } from './actions'

const reducer = (state = null, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return action.payload
    default:
      return state
  }
}

export default reducer
