import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'

import { getProducts } from '../../api/getProducts'
import { useApi } from '../../api/useApi'
import * as cartActions from '../../store/cartItems/actions'
import * as productActions from '../../store/products/actions'

import { ProductsWrap } from './styled'
import Product from './components/Product'
import Pagination from '../../components/Pagination'

const Products = ({ location, addProduct }) => {
  const { page } = qs.parse(location.search.substr(1))
  const defautlPageSize = 10

  const handleOnChange = evt => {
    if (evt.target.value) {
      return evt.target.value
    }
  }

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page, size: defautlPageSize } }),
    [page]
  )

  const handleAddToCart = productId => addProduct(productId)

  return (
    <Layout>
      <H1 textAlign="center">E-Commerce app</H1>
      {isLoading && <Loader />}
      {res && (
        <>
          <div>
            <label htmlFor="pageSize">Number of products on page: </label>
            <select
              id="pageSize"
              onBlur={evt => handleOnChange(evt)}
              name="page_size"
            >
              <option value={defautlPageSize}>{defautlPageSize}</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
          </div>
          <Pagination
            pages={res.meta.page_count}
            recors={res.meta.record_count}
          />
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
  changeProductList: productActions.changePageSize,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
