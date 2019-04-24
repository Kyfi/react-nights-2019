import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { CartItemComponent } from './components/CartItem'
import { CartItemsWrapper } from './styled'
import * as cartActions from '../../store/cart/actions'

const CartView = ({ items, removeProduct }) => (
  <Layout>
    <H1>Cart</H1>
    <div>
      {items.length < 1 ? (
        <>
          <span role={'img'} aria-label={'Cart is so empty'}>
            😢
          </span>{' '}
          Cart is so empty...
        </>
      ) : (
        <CartItemsWrapper>
          {items.map(item => (
            <CartItemComponent
              key={item.product.id}
              productId={item.product.id}
              quantity={item.quantity}
              removeProduct={removeProduct}
            />
          ))}
        </CartItemsWrapper>
      )}
    </div>
  </Layout>
)

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    quantity: state.cartItems[productId],
    product: { id: productId },
  })),
})

const mapDispatchToProps = {
  removeProduct: cartActions.removeProduct,
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView)

export { Cart }
