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
  Footer,
} from './styled'
import { Button } from '../../../../components/Button'
import { toast } from 'react-toastify'

const Product = ({ node, addProduct }) => (
  <Wrapper data-testid="product-in-list">
    {console.log(node)}
    <Inner>
      <ImgWrap>
        <Link to={urls.productDetail(node.id)}>
          <Img src={node.image_url} alt={`${node.name} image`} />
        </Link>
      </ImgWrap>
      <TitleWrap>
        <Title>
          <Link to={urls.productDetail(node.id)}>{node.name}</Link>
        </Title>
      </TitleWrap>
      <Footer>
        <Price>{node.price.formatted_amount}</Price>
        <Button
          data-testid={'add-to-cart'}
          onClick={() => {
            addProduct(node.id)
            toast.success(`1x ${node.name} has been added to Cart`)
          }}
        >
          Add to Cart
        </Button>
      </Footer>
    </Inner>
  </Wrapper>
)

export default Product
