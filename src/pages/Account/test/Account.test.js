import React from 'react'
import 'jest-styled-components'

import { App } from '../../../App'
import urls from '../../../constants/urls'
import { renderWithRouter } from '../../../utilsTest/render'
import { configureStore } from '../../../store'
import { USER } from '../../../utilsTest/mockData'

describe('[pages] Account', () => {
  describe('when not logged in', () => {
    it('should redirect to login page', () => {
      const renderer = renderWithRouter(<App />, urls.myAccount)
      const HTMLDivElement = renderer.getByText('Sign In')
      expect(HTMLDivElement).toBeTruthy()
    })
  })

  describe('when logged in', () => {
    it('should render private user account page', () => {
      const store = configureStore({
        customer: {
          attributes: {
            metadata: {
              firstName: USER.firstName,
            },
          },
        },
      })

      const renderer = renderWithRouter(<App store={store} />, urls.myAccount)
      const H1HtmlElement = renderer.getByText(`Welcome ${USER.firstName}`)
      expect(H1HtmlElement).toBeTruthy()
    })
  })
})
