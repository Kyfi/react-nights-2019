export const LOAD_PRODUCTS = 'products/LOAD'
export const CHANGE_PAGE_SIZE = 'products/CHANGE'

export const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  payload: products,
})

export const changePageSize = products => ({
  type: CHANGE_PAGE_SIZE,
  payload: products,
})
