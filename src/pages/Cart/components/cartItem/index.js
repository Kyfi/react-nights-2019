import React from 'react'
import {
  CartItem,
  CartItemName,
  CartItemQuantity,
  CartItemButton,
} from './styled'

const cartItemComponent = ({ item, onRemoveFromCart }) => (
  <>
    {item.quantity > 0 && (
      <CartItem key={item.product.id}>
        <CartItemName>{item.product.name}</CartItemName>
        <CartItemQuantity>{item.quantity}</CartItemQuantity>
        <CartItemButton>
          <button
            onClick={evt => onRemoveFromCart(item.product.id, evt)}
            type={'button'}
            title={'Delete this cart item'}
            aria-label={'Delete this cart item'}
            disabled={item.quantity < 1 && item.quantity}
          >
            x
          </button>
        </CartItemButton>
      </CartItem>
    )}
  </>
)

export default cartItemComponent
