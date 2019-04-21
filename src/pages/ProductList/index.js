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
import urls from '../../constants/urls'

const Products = ({ location, addProduct, history }) => {
  const { page, page_size } = qs.parse(location.search.substr(1))

  const pageSize = page_size === undefined ? 25 : page_size

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page, size: pageSize } }),
    [page, page_size]
  )

  const handleAddToCart = productId => addProduct(productId)

  return (
    <Layout>
      <H1 textAlign="center">E-Commerce app</H1>
      {isLoading && <Loader />}
      {res && (
        <>
          <div>
            {`
            Product
            ${page === undefined ? '1' : ''}
            ${page !== undefined && page === '1' ? '1' : ''}
            ${
              page !== undefined && page !== false && page !== '1'
                ? (page - 1) * pageSize + 1
                : ''
            }
            to
            ${page === undefined ? pageSize : ''}
            ${page !== undefined && page === '1' ? pageSize : ''}
            ${
              page !== undefined && page !== false && page !== '1'
                ? res.meta.record_count > pageSize * page
                  ? pageSize * page
                  : res.meta.record_count
                : ''
            }
             of ${res.meta.record_count} `}
            <select
              id="pageSize"
              onBlur={evt => {
                history.push(
                  `${urls.productList}?page=1&page_size=${evt.target.value}`
                )
              }}
              name="page_size"
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
            {' per page'}
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
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
