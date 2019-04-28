import { ADD_PRODUCT, addProduct } from './actions'

describe('[actions] cart', () => {
  it('should handle ADD_PRODUCT', () => {
    const productId = 1
    const action = addProduct(productId)
    expect(action).toEqual({
      payload: productId,
      type: ADD_PRODUCT,
    })
  })
})
