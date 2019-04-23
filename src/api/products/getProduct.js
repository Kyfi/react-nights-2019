import { api } from './../apiClient'
import { formatProduct } from './../utils/formatProduct'

export const getProductById = async id => {
  const { data, included } = await api(`/api/skus/${id}?include=prices`)

  return formatProduct(data, included)
}
