import config from '../config'

import { getToken } from './getToken'

export const getAuthRequest = async (path, type) => {
  const { access_token } = await getToken()
  const res = await fetch(`${config.apiUrl}/api/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  })

  const products = await res.json()

  switch (type) {
    case 'products':
      return products.data.map(product => ({
        ...product.attributes,
        id: product.id,
        price: products.included.find(
          price => price.id === product.relationships.prices.data[0].id
        ).attributes,
      }))
    default:
      return {
        ...products.data.attributes,
        id: products.data.id,
        price: products.included[0].attributes.formatted_amount,
      }
  }
}
