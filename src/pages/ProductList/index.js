import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'

import { getProducts } from '../../api/getProducts'
import { useApi } from '../../api/useApi'
import * as cartActions from '../../store/cartItems/actions'

import { ProductsWrap } from './styled'
import Product from './components/Product'
import Pagination from '../../components/Pagination'

const Products = ({ location, addProduct }) => {
  const { page } = qs.parse(location.search.substr(1))

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page } }),
    [page]
  )

  const handleAddToCart = productId => addProduct(productId)

  return (
    <Layout>
      <H1 textAlign="center">E-Commerce app</H1>
      {isLoading && <Loader />}
      {res && (
        <>
          <Pagination pages={res.meta.page_count} />
          <ProductsWrap>
            {res.data.map(product => (
              <Product
                key={product.id}
                node={product}
                addProduct={handleAddToCart}
              />
            ))}
          </ProductsWrap>
        </>
      )}
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
