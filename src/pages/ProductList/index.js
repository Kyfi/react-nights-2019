import Router from 'next/router'

import { getProducts } from '../../api/products/getProducts'

import React from 'react'
import { connect } from 'react-redux'

import Loader from '../../components/Loader'
import { Pagination } from '../../components/Pagination'
import Product from './components/Product'
import { ProductsWrap, ProductsWrapInner } from './styled'

import * as cartActions from '../../store/cart/actions'
import * as productActions from '../../store/products/actions'
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../../constants/base'

const Products = ({ res, match, page, size, addProduct, isLoading }) => {
  const handleAddToCart = productId => addProduct(productId)
  const handleSizeChange = newSize => {
    Router.push(`/products?page=${page}&size=${newSize}`)
  }

  return (
    <main>
      {isLoading && <Loader centered />}
      {res && (
        <>
          <Pagination
            pages={res.meta.page_count}
            page={page}
            pageSize={size}
            recordCount={res.meta.record_count}
            onSizeChange={handleSizeChange}
          />
          <ProductsWrap>
            <ProductsWrapInner data-testid={'products-in-list'}>
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
    </main>
  )
}

const getInitialProps = async ({ store, query }) => {
  const { page = PAGE_DEFAULT, size = PAGE_SIZE_DEFAULT } = query

  const res = await getProducts({ page: { number: page, size: size} })
  store.dispatch(productActions.loadProducts(res.data))
  return { page, size, isLoading: false, res }
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

ProductList.getInitialProps = getInitialProps

export { ProductList }
