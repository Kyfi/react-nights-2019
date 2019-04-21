import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import { Link } from 'react-router-dom'

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
import urls from '../../constants/urls'
/*import { changePageSize } from '../../store/products/actions'*/

const Products = ({ location, addProduct }) => {
  const { page } = qs.parse(location.search.substr(1))

  const defaultPageSize = 10

  /*const handleOnChange = evt => {
    const pageSizes = evt.target.value
    console.log (pageSizes)
  }*/

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page, size: defaultPageSize } }),
    [page]
  )

  const handleAddToCart = productId => addProduct(productId)

  return (
    <Layout>
      <H1 textAlign="center">E-Commerce app</H1>
      <div>sss</div>
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
                ? (page - 1) * defaultPageSize + 1
                : ''
            }
            to
            ${page === undefined ? defaultPageSize : ''}
            ${page !== undefined && page === '1' ? defaultPageSize : ''}
            ${
              page !== undefined && page !== false && page !== '1'
                ? res.meta.record_count > defaultPageSize * page
                  ? defaultPageSize * page
                  : res.meta.record_count
                : ''
            }
             of ${res.meta.record_count} `}
            <select
              id="pageSize"
              onBlur={evt => {
                evt.preventDefault()
              }}
              name="page_size"
            >
              <option value={defaultPageSize}>{defaultPageSize}</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
            {' per page'}
          </div>
          <Link to={`${urls.productList}`}>asdada</Link>
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
