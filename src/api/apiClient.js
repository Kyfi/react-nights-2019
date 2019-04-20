import config from '../config'
import { getGuestToken } from './getGuestToken'
import { getToken } from '../utils/token'

export const api = async (path, options) => {
  let token = await getToken()

  if (!token) {
    token = await getGuestToken()
  }

  const res = await fetch(`${config.apiUrl}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    ...options,
  })

  return res.json()
}
