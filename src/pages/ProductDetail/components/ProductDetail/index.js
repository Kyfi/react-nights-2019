import React from 'react'
import Product from './Product'

const ProductDetail = ({ product }) => (
  <Product key={product.id} node={product} />
)

export default ProductDetail
