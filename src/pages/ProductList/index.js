import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import Product from './components/Product'
import { Pagination } from '../../components/Pagination'
import { ProductsWrap, ProductsWrapInner } from './styled'

import { getProducts } from '../../api/products/getProducts'
import { useApi } from '../../api/useApi'
import * as cartActions from '../../store/cart/actions'
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../../constants/base'

const Products = ({ location, addProduct, history }) => {
  const { page = PAGE_DEFAULT, page_size: size = PAGE_SIZE_DEFAULT } = qs.parse(
    location.search.substr(1)
  )

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page, size: size } }),
    [page, size]
  )

  const handleAddToCart = productId => addProduct(productId)

  return (
    <Layout dataTestid="product-in-list">
      {isLoading && <Loader centered />}
      {res && (
        <>
          <Pagination
            pages={res.meta.page_count}
            page={page}
            pageSize={size}
            recordCount={res.meta.record_count}
            history={history}
          />
          <ProductsWrap>
            <ProductsWrapInner>
              {res.data.map(product => (
                <Product
                  key={product.id}
                  node={product}
                  addProduct={handleAddToCart}
                />
              ))}
            </ProductsWrapInner>
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
