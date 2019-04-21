import qs from 'qs'
import { api } from './apiClient'
import { formatProduct } from './utils/format-product'

export const getProducts = async urlQuery => {
  console.log(urlQuery)
  console.log(qs.stringify({ include: 'prices', ...urlQuery }))
  const { data, meta, included } = await api(
    `/api/skus?${qs.stringify({ include: 'prices', ...urlQuery })}`
  )

  console.log(meta)

  return {
    data: data.map(product => formatProduct(product, included)),
    meta,
  }
}
