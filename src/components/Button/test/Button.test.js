import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import { Button } from '../index'

// This is just an example how to test components
describe('[components] Button', () => {
  it('should render correctly', () => {
    const renderer = render(<Button>My Button</Button>)
    expect(renderer.container).toMatchSnapshot()
  })

  describe('when default', () => {
    it('should render correctly', () => {
      const renderer = render(<Button default>My Button</Button>)
      expect(renderer.container).toMatchSnapshot()
    })
  })
})
