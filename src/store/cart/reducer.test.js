import reducer from './reducer'
import { addProduct } from './actions'

describe('[reducer] cart', function() {
  it('should return default state', function() {
    const state = reducer(undefined, {})
    expect(state).toEqual({})
  })
  it('should handle ADD_PRODUCT default state', function() {
    const productId = 1
    const state = reducer(undefined, addProduct(productId))
    expect(state).toEqual({ '1': 1 })
  })
})
