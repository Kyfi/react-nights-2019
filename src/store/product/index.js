import { LOAD_PRODUCT } from './actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return action.payload
    default:
      return state
  }
}

export default reducer
