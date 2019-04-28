import React from 'react'

import urls from '../../../../constants/urls'
import {
  Wrapper,
  Inner,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Price,
  Link,
} from './styled'
import { ButtonGroup } from '../../../../components/Typography'
import { Button } from '../../../../components/Button'
import { toast } from 'react-toastify'

const Product = ({ node, addProduct }) => (
  <Wrapper data-testid="product-in-list">
    <Inner>
      <ImgWrap>
        <Link to={urls.productDetail(node.id)}>
          <Img src={node.image_url} alt={`${node.name} image`} />
        </Link>
      </ImgWrap>
      <TitleWrap>
        <Title>{node.name}</Title>
      </TitleWrap>
      <Price>{node.price.formatted_amount}</Price>
      <ButtonGroup>
        <Button
          onClick={evt => {
            evt.preventDefault()
            addProduct(node.id)
            toast.success(`1x ${node.name} has been added to Cart`)
          }}
        >
          Add to Cart
        </Button>
        <Link to={urls.productDetail(node.id)}>
          <Button default>Show Detail</Button>
        </Link>
      </ButtonGroup>
    </Inner>
  </Wrapper>
)

export default Product
