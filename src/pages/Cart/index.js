import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'

const CartView = ({ items }) => (
  <Layout>
    <H1>Cart</H1>
    <div>
      {!items && (
        <>
          <span role={'img'} aria-label={'Cart is so empty'}>
            😢
          </span>{' '}
          Cart is so empty...
        </>
      )}
      {items && (
        <ul>
          {items.map(item => (
            <li key={item.product.id}>
              {item.product.name} - {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  </Layout>
)

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    quantity: state.cartItems[productId],
    product: state.products.find(p => p.id === productId),
  })),
})

const Cart = connect(mapStateToProps)(CartView)

export { Cart }
