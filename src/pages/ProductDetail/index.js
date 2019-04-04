import React from 'react'
import PropTypes from 'prop-types'

import { getAuthRequest } from '../../api/getAuthRequest'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import ProductDetailComponent from './components/ProductDetail'
import { productWithPrice } from '../../helpers/transform/productWithPrice'

class ProductDetail extends React.Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
    product: {},
  }

  async componentDidMount() {
    const { match } = this.props

    const productData = await getAuthRequest(
      `skus/${match.params.productId}?include=prices`
    )

    const product = productWithPrice(productData)

    this.setState({ product, isLoading: false })
  }

  render() {
    const { isLoading, product } = this.state

    return (
      <Layout>
        <H1 textAlign="center">Product Detail: {product.id}</H1>
        {isLoading && <Loader />}
        {product && <ProductDetailComponent product={product} />}
      </Layout>
    )
  }
}

ProductDetail.propTypes = {
  match: PropTypes.any.isRequired,
}

export { ProductDetail }
