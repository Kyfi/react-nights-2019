import config from '../config'

import { getToken } from './getToken'

export const getAuthRequest = async path => {
  const { access_token } = await getToken()
  const res = await fetch(`${config.apiUrl}/api/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  })

  const json = await res.json()

  return json
}
