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

const Products = ({ location, addProduct }) => {
  const { page } = qs.parse(location.search.substr(1))

  const defaultPageSize = 10

  const handleOnChange = evt => {
    console.log(evt.target.value)
    // 1. call some getProducts with size: evt.target.value
    // but i cant call useEffect hook inside function
  }

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page, size: defaultPageSize } }),
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
            {`Product ${
              page === '1' ? '1' : (page - 1) * defaultPageSize + 1
            } to ${page === undefined ? defaultPageSize : ''} ${
              page !== undefined &&
              res.meta.record_count > defaultPageSize * page
                ? defaultPageSize * page
                : res.meta.record_count
            } of ${res.meta.record_count} `}
            <select
              id="pageSize"
              onBlur={evt => handleOnChange(evt)}
              name="page_size"
            >
              <option value={defaultPageSize}>{defaultPageSize}</option>
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
          <Link to={`${urls.productList}?page=1&page=20`}>sssss</Link>
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
