import qs from 'qs'
import { api } from './../apiClient'
import { formatProduct } from './../utils/formatProduct'

export const getProducts = async urlQuery => {
  const { data, meta, included } = await api(
    `/api/skus?${qs.stringify({ include: 'prices', ...urlQuery })}`
  )

  return {
    data: data.map(product => formatProduct(product, included)),
    meta,
  }
}
