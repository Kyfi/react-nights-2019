export const productsWithPrice = productsData =>
  productsData.data.map(product => ({
    ...product.attributes,
    id: product.id,
    price: productsData.included.find(
      price => price.id === product.relationships.prices.data[0].id
    ),
  }))
