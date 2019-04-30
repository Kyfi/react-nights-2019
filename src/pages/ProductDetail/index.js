import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import ProductComponent from './components/Product'

import { useApi } from '../../api/useApi'
import { getProductById } from '../../api/products/getProduct'
import * as cartActions from '../../store/cart/actions'

const ProductView = ({ match, addProduct }) => {
  const { productId } = match.params

  const { data: product, isLoading } = useApi(() => getProductById(productId), [
    productId,
  ])

  return (
    <Layout>
      {isLoading && <Loader />}
      {product && (
        <div data-testid="product-detail">
          <ProductComponent
            node={product}
            key={product.id}
            addProduct={addProduct}
          />
        </div>
      )}
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductDetail = connect(
  null,
  mapDispatchToProps
)(ProductView)

export { ProductDetail }
