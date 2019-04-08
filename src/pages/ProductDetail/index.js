import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadProduct } from '../../store/product/actions'
import { addProduct } from '../../store/cartItems/actions'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'

import { getAuthRequest } from '../../api/getAuthRequest'
import { productWithPrice } from '../../helpers/transform/productWithPrice'
import { AddButton } from '../ProductList/components/Product/styled'
import ProductComponent from './components/Product'

class Product extends React.Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
  }

  async componentDidMount() {
    if (this.props.product === null) {
      const { match } = this.props

      const productData = await getAuthRequest(
        `skus/${match.params.productId}?include=prices`
      )

      const product = productWithPrice(productData)

      this.props.loadProduct(product)
    }

    this.setState({ isLoading: false })
  }

  handleAddToCart = productId => {
    this.props.addProduct(productId)
  }

  render() {
    const { product } = this.props
    const { isLoading } = this.state

    return (
      <Layout>
        {isLoading && <Loader />}
        {product && <ProductComponent node={product} key={product.id} />}
        <AddButton onClick={() => this.handleAddToCart(product.id)}>
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
