import { getCustomerToken } from '../../api/customers/getCustomerToken'
import { getCustomer } from '../../api/customers/getCustomer'
import urls from '../../constants/urls'

import { setToken, removeToken } from '../../utils/token'
import { setRefreshToken, removeRefreshToken } from '../../utils/refreshToken'
import { removeCustomer } from '../../utils/customer'

export const LOGIN_INIT = 'customer/LOGIN_INIT'
export const LOGIN_FAIL = 'customer/LOGIN_FAIL'
export const LOGIN_SUCCESS = 'customer/LOGIN_SUCCESS'

export const LOGOUT = 'customer/LOGOUT'

export const login = ({ username, password, push }) => async dispatch => {
  dispatch({
    type: LOGIN_INIT,
    payload: { username, password },
  })

  const { ownerId, access_token, refresh_token } = await getCustomerToken({
    username,
    password,
  })

  setToken(access_token)
  setRefreshToken(refresh_token)

  const customer = await getCustomer(ownerId)

  dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      customer,
    },
  })

  push(urls.myAccount)
}

export const logout = ({ push }) => dispatch => {
  removeToken()
  removeRefreshToken()
  removeCustomer()

  push(urls.index)

  dispatch({
    type: LOGOUT,
  })
}
