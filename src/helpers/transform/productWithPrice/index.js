export const productWithPrice = productData => ({
  ...productData.data.attributes,
  id: productData.data.id,
  price: productData.included[0].attributes.formatted_amount,
})
