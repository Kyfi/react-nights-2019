export const LOAD_PRODUCT = 'product/LOAD'

export const loadProduct = product => ({
  type: LOAD_PRODUCT,
  payload: product,
})
