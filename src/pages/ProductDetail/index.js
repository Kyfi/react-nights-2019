import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadProduct } from '../../store/product/actions'
import { addProduct } from '../../store/cartItems/actions'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import ProductDetailComponent from './components/ProductDetail'

import { getAuthRequest } from '../../api/getAuthRequest'
import { productWithPrice } from '../../helpers/transform/productWithPrice'
import { AddButton } from '../ProductList/components/Product/styled'

class Product extends React.Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
  }

  async componentDidMount() {
    if (this.props.product.length === 0) {
      const { match } = this.props

      const productData = await getAuthRequest(
        `skus/${match.params.productId}?include=prices`
      )

      const product = productWithPrice(productData)
      this.props.loadProduct(product)
    }

    this.setState({ isLoading: false })
  }

  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    const { product } = this.props
    const { isLoading } = this.state
    return (
      <Layout>
        <H1 textAlign="center">Product Detail: {product.id}</H1>
        {isLoading && <Loader />}
        {product && <ProductDetailComponent product={product} />}
        <AddButton onClick={evt => this.handleAddToCart(product.id, evt)}>
          Add to Cart
        </AddButton>
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
  addProduct,
}

const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

export { ProductDetail }
