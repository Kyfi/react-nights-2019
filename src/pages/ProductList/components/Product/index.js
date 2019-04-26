import React from 'react'

import urls from '../../../../constants/urls'
import { Wrapper, ImgWrap, Img, TitleWrap, Title, Price, Link } from './styled'
import { ButtonGroup } from '../../../../components/Typography'
import { Button } from '../../../../components/Button'
import { toast } from 'react-toastify'

const Product = ({ node, addProduct }) => (
  <Wrapper>
    <Link to={urls.productDetail(node.id)}>
      <ImgWrap>
        <Img src={node.image_url} alt={`${node.name} image`} />
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
        <Button default>Show Detail</Button>
      </ButtonGroup>
    </Link>
  </Wrapper>
)

export default Product
