import React from 'react'

import { kebabCase } from '../../../../utils/kebab-case'
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
    <Inner>
      <ImgWrap>
        <Link
          href={`/product?id=${node.id}`}
          as={`${urls.productList}/${node.id}/${kebabCase(node.name)}`}
        >
          <Img src={node.image_url} alt={`${node.name}`} />
        </Link>
      </ImgWrap>
      <TitleWrap>
        <Title>
          <Link
            href={`/product?id=${node.id}`}
            as={`${urls.productList}/${node.id}/${kebabCase(node.name)}`}
          >
            {node.name}
          </Link>
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
