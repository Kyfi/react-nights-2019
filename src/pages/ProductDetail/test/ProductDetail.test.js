import React from 'react'
import { waitForElement } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'
import urls from '../../../constants/urls'
import { renderWithRouter } from '../../../utilsTest/render'
import { mockFetchProduct } from '../../../utilsTest/mockHelpers'

describe('[pages] ProductDetail', () => {
  const productId = 1

  describe('when loading', () => {
    it('should render correctly', () => {
      const renderer = renderWithRouter(<App />, urls.productDetail(productId))
      expect(renderer.container).toMatchSnapshot()
    })
  })

  describe('when product loaded', () => {
    mockFetchProduct()

    it('should render correctly', async () => {
      const renderer = renderWithRouter(<App />, urls.productDetail(productId))
      await waitForElement(() => renderer.getByTestId('product-detail'))
      expect(renderer.container).toMatchSnapshot()
    })
  })
})
