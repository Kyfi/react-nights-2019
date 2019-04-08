import React from 'react'
import { connect } from 'react-redux'

import {
  ProductWrap,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Price,
  Description,
} from './styled'
import { loadProduct } from '../../../../store/product/actions'
import { addProduct } from '../../../../store/cartItems/actions'
import { AddButton } from '../../../ProductList/components/Product/styled'

class ProductView extends React.Component {
  handleAddToCart = productId => {
    this.props.addProduct(productId)
  }

  render() {
    const { node } = this.props

    return (
      <ProductWrap>
        <TitleWrap>
          <Title>{node.name}</Title>
        </TitleWrap>
        <ImgWrap>
          <Img src={node.image_url} alt={`${node.name} image`} />
        </ImgWrap>
        <Price>{node.price}</Price>
        <Description>{node.description}</Description>
        <AddButton onClick={() => this.handleAddToCart(node.id)}>
          Add to Cart
        </AddButton>
      </ProductWrap>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product,
})

const mapDispatchToProps = {
  loadProduct,
  addProduct,
}

const Product = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductView)

export { Product }
