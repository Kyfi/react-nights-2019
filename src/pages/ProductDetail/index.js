import React from 'react'
import PropTypes from 'prop-types'

import { getAuthRequest } from '../../api/getAuthRequest'
import Header from '../../components/Header'
import Loader from '../../components/Loader'

class ProductDetail extends React.Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
    productData: [],
  }

  async componentDidMount() {
    const { match } = this.props

    const productData = await getAuthRequest(
      `skus/${match.params.productId}?include=prices`
    )

    this.setState({ productData, isLoading: false })
  }

  render() {
    const { isLoading, productData } = this.state

    return (
      <>
        <Header />
        {isLoading && <Loader />}
        {productData && (
          <div>
            <h2>Product Detail: {productData.id}</h2>
            <div>
              <img
                width={300}
                src={productData.image_url}
                alt={productData.name}
              />
            </div>
            <div>price: {productData.price}</div>
            <div>name: {productData.name}</div>
            <div>code: {productData.code}</div>
            <div>description: {productData.description}</div>
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
