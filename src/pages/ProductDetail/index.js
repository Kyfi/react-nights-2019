import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadProduct } from '../../store/product/actions'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'

import { getAuthRequest } from '../../api/getAuthRequest'
import { productWithPrice } from '../../helpers/transform/productWithPrice'
import { Product as ProductComponent } from './components/Product'

class Product extends React.Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
  }

  fetchProduct = async productId => {
    this.setState({ isLoading: true })
    const productData = await getAuthRequest(`skus/${productId}?include=prices`)
    const product = productWithPrice(productData)

    this.props.loadProduct(product)
    this.setState({ isLoading: false })
  }

  componentDidMount() {
    const { productId } = this.props.match.params
    this.fetchProduct(productId)
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props.match.params
    if (prevProps.match.params.productId !== productId) {
      this.fetchProduct(productId)
    }
  }

  componentWillUnmount() {
    this.props.loadProduct(null)
  }

  render() {
    const { product } = this.props
    const { isLoading } = this.state

    return (
      <Layout>
        {isLoading && <Loader />}
        {product && <ProductComponent node={product} key={product.id} />}
      </Layout>
    )
  }
}

Product.propTypes = {
  match: PropTypes.any.isRequired,
}

const mapStateToProps = state => ({
  product: state.product,
})

const mapDispatchToProps = {
  loadProduct,
}

const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

export { ProductDetail }
