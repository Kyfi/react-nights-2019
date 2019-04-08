import React from 'react'
import { connect } from 'react-redux'

import urls from '../../../../constants/urls'
import {
  Wrapper,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Price,
  Link,
  AddButton,
} from './styled'
import { addProduct } from '../../../../store/cartItems/actions'
import { loadProducts } from '../../../../store/products/actions'

class ProductView extends React.Component {
  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
    alert('Product has been added!')
  }

  render() {
    const { node } = this.props

    return (
      <Wrapper>
        <Link to={urls.productDetail(node.id)}>
          <ImgWrap>
            <Img src={node.image_url} alt={`${node.name} image`} />
          </ImgWrap>
          <TitleWrap>
            <Title>{node.name}</Title>
          </TitleWrap>
          <Price>{node.price.formatted_amount}</Price>
          <AddButton
            type={'button'}
            onClick={evt => this.handleAddToCart(node.id, evt)}
          >
            Add to Cart
          </AddButton>
        </Link>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = {
  loadProducts,
  addProduct,
}

const Product = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductView)

export default Product
