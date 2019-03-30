import React from 'react'
import PropTypes from 'prop-types'

import { getAuthRequest } from '../../api/getAuthRequest'

class ProductDetail extends React.Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
    productData: {},
  }

  async componentDidMount() {
    const { match } = this.props

    const productData = await getAuthRequest(`skus/${match.params.productId}`)
    this.setState({ productData, isLoading: false })
  }

  render() {
    const {
      isLoading,
      productData: { data: product },
    } = this.state

    return (
      <>
        {isLoading && '...'}
        {product && (
          <div>
            <h2>Product Detail: {product.id}</h2>
            <div>
              <img
                width={300}
                src={product.attributes.image_url}
                alt={product.attributes.name}
              />
            </div>
            <div>name: {product.attributes.name}</div>
            <div>code: {product.attributes.code}</div>
            <div>created_at: {product.attributes.created_at}</div>
            <div>description: {product.attributes.description}</div>
            <div>pieces_per_pack: {product.attributes.pieces_per_pack}</div>
            <div>reference: {product.attributes.reference}</div>
            <div>tag_names: {product.attributes.tag_names}</div>
            <div>unit_of_weight: {product.attributes.unit_of_weight}</div>
            <div>updated_at: {product.attributes.updated_at}</div>
            <div>weight: {product.attributes.weight}</div>
          </div>
        )}
      </>
    )
  }
}

ProductDetail.propTypes = {
  match: PropTypes.any.isRequired,
}

export { ProductDetail }
