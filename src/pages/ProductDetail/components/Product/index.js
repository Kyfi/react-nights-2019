import React from 'react'

import {
  ProductWrap,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Price,
  Description,
} from './styled'

import { Button } from '../../../../components/Button'

const ProductComponent = ({ node, addProduct }) => (
  <ProductWrap>
    <TitleWrap>
      <Title>{node.name}</Title>
    </TitleWrap>
    <ImgWrap>
      <Img src={node.image_url} alt={`${node.name} image`} />
    </ImgWrap>
    <Price>{node.price}</Price>
    <Description>{node.description}</Description>
    <Button
      onClick={evt => {
        evt.preventDefault()
        addProduct(node.id)
      }}
    >
      Add to Cart
    </Button>
    {console.log(addProduct(node.id))}
  </ProductWrap>
)

export default ProductComponent
