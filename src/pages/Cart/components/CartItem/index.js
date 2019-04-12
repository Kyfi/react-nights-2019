import React from 'react'
import {
  CartItem,
  CartImgWrap,
  CartImg,
  CartItemName,
  CartItemQuantity,
  CartItemButton,
} from './styled'

const CartItemComponent = ({ item, removeProduct }) => (
  <>
    {item.quantity > 0 && (
      <CartItem>
        <CartImgWrap>
          <CartImg
            width={40}
            src={item.product.image_url}
            alt={`${item.product.name} image`}
          />
        </CartImgWrap>
        <CartItemName>{item.product.name}</CartItemName>
        <CartItemQuantity>{item.quantity}</CartItemQuantity>
        <CartItemButton>
          <button
            onClick={() => removeProduct(item.product.id)}
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
