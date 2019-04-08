import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'

import { getAuthRequest } from '../../api/getAuthRequest'
import { productsWithPrice } from '../../helpers/transform/productsWithPrice'

import { addProduct } from '../../store/cartItems/actions'
import { loadProducts } from '../../store/products/actions'

import { ProductsWrap } from './styled'
import Product from './components/Product'

class Products extends Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
  }

  async componentDidMount() {
    if (this.props.products.length === 0) {
      const productsData = await getAuthRequest('skus?include=prices')
      const products = productsWithPrice(productsData)
      this.props.loadProducts(products)
    }

    this.setState({ isLoading: false })
  }

  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    return (
      <Layout>
        <H1 textAlign="center">E-Commerce app</H1>
        {this.state.isLoading && <Loader />}
        <ProductsWrap>
          {this.props.products.map(product => (
            <Product key={product.id} node={product} />
          ))}
        </ProductsWrap>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = {
  loadProducts,
  addProduct,
}

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export { ProductList }
