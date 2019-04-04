import React from 'react'
import {
  Wrapper,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Price,
  Description,
} from './styled'

const Product = ({ node }) => (
  <Wrapper>
    <TitleWrap>
      <Title>{node.name}</Title>
    </TitleWrap>
    <ImgWrap>
      <Img src={node.image_url} alt={`${node.name} image`} />
    </ImgWrap>
    <Price>{node.price}</Price>
    <Description>{node.description}</Description>
  </Wrapper>
)

export default Product
