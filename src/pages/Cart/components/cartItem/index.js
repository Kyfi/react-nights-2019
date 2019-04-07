import React from 'react'
import {
  CartItem,
  CartItemName,
  CartItemQuantity,
  CartItemButton,
} from './styled'

const cartItemComponent = ({ item, onRemoveFromCart }) => (
  <CartItem key={item.product.id}>
    <CartItemName>{item.product.name}</CartItemName>
    <CartItemQuantity>{item.quantity}</CartItemQuantity>
    <CartItemButton>
      <button
        onClick={evt => onRemoveFromCart(item.id, evt)}
        type={'button'}
        title={'Delete this cart item'}
        aria-label={'Delete this cart item'}
      >
        x
      </button>
    </CartItemButton>
  </CartItem>
)

export default cartItemComponent
