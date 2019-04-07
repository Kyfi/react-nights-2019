import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import CartItemComponent from './components/cartItem'
import { CartItemsWrapper } from './styled'
import { removeProduct } from '../../store/cartItems/actions'

class CartView extends React.Component {
  handleRemoveFromCart = (productId, evt) => {
    evt.preventDefault()
    this.props.removeProduct(productId)
  }

  render() {
    const { items } = this.props

    return (
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
                  item={item}
                  onRemoveFromCart={this.handleRemoveFromCart}
                />
              ))}
            </CartItemsWrapper>
          )}
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    quantity: state.cartItems[productId],
    product: state.products.find(p => p.id === productId),
  })),
})

const mapDispatchToProps = {
  removeProduct,
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView)

export { Cart }
