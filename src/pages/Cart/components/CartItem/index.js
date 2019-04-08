import React from 'react'
import {
  CartItem,
  CartItemName,
  CartItemQuantity,
  CartItemButton,
} from './styled'

const CartItemComponent = ({ item, onRemoveFromCart }) => (
  <>
    {item.quantity > 0 && (
      <CartItem>
        <CartItemName>{item.product.name}</CartItemName>
        <CartItemQuantity>{item.quantity}</CartItemQuantity>
        <CartItemButton>
          <button
            onClick={() => onRemoveFromCart(item.product.id)}
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

export default CartItemComponent
