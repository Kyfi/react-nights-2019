import React, { Component } from 'react'

import ProductListComponent from './components/ProductList'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'

import { getAuthRequest } from '../../api/getAuthRequest'
import Header from '../../components/Header'

class ProductList extends Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
    products: [],
  }

  async componentDidMount() {
    const products = await getAuthRequest('skus?include=prices', 'products')
    this.setState({ products, isLoading: false })
  }

  render() {
    const { isLoading, products } = this.state

    return (
      <Layout>
        <Header />
        <H1 textAlign="center">E-Commerce app</H1>
        {isLoading && <Loader />}
        {products && <ProductListComponent products={products} />}
      </Layout>
    )
  }
}

export { ProductList }
