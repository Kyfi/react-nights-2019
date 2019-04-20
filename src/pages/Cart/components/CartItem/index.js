import React from 'react'
import { Link } from 'react-router-dom'

import urls from '../../../../constants/urls'
import { useApi } from '../../../../api/useApi'
import { getProductById } from '../../../../api/getProduct'
import {
  CartItem,
  CartImgWrap,
  CartImg,
  CartItemName,
  CartItemQuantity,
  CartItemButton,
} from './styled'
import Loader from '../../../../components/Loader'

const CartItemComponent = ({ productId, quantity, removeProduct }) => {
  const { data: product, isLoading } = useApi(
    () => getProductById(productId),
    productId
  )

  return (
    <CartItem key={productId}>
      {isLoading && <Loader small />}
      {product && (
        <>
          <CartImgWrap>
            <CartImg
              width={40}
              src={product.image_url}
              alt={`${product.name}`}
            />
          </CartImgWrap>
          <CartItemName>
            <Link to={urls.productDetail(product.id)}>{product.name}</Link>
          </CartItemName>
          <CartItemQuantity>{quantity}</CartItemQuantity>
          <CartItemButton>
            <button
              onClick={() => removeProduct(product.id)}
              type={'button'}
              title={'Delete this cart item'}
              aria-label={'Delete this cart item'}
            >
              x
            </button>
          </CartItemButton>
        </>
      )}
    </CartItem>
  )
}

export { CartItemComponent }
