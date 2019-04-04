import React, { Component } from 'react'

import ProductListComponent from './components/ProductList'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'

import { getAuthRequest } from '../../api/getAuthRequest'
import { productsWithPrice } from '../../helpers/transform/productsWithPrice'

class ProductList extends Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
    products: [],
  }

  async componentDidMount() {
    const productsData = await getAuthRequest('skus?include=prices')
    const products = productsWithPrice(productsData)
    this.setState({ products, isLoading: false })
  }

  render() {
    const { isLoading, products } = this.state

    return (
      <Layout>
        <H1 textAlign="center">E-Commerce app</H1>
        {isLoading && <Loader />}
        {products && <ProductListComponent products={products} />}
      </Layout>
    )
  }
}

export { ProductList }
