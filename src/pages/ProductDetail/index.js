import React from 'react'
import PropTypes from 'prop-types'

import { getAuthRequest } from '../../api/getAuthRequest'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import ProductDetailComponent from './components/ProductDetail'

class ProductDetail extends React.Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
    productData: [],
  }

  async componentDidMount() {
    const { match } = this.props

    const productData = await getAuthRequest(
      `skus/${match.params.productId}?include=prices`
    )

    this.setState({ productData, isLoading: false })
  }

  render() {
    const { isLoading, productData } = this.state

    return (
      <Layout>
        <Header />
        <H1 textAlign="center">Product Detail: {productData.id}</H1>
        {isLoading && <Loader />}
        {productData && <ProductDetailComponent product={productData} />}
      </Layout>
    )
  }
}

ProductDetail.propTypes = {
  match: PropTypes.any.isRequired,
}

export { ProductDetail }
