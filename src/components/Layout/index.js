import React from 'react'

import { Layout as LayoutBase } from './styled'

import Header from '../Header'

const Layout = ({ children }) => (
  <>
    <Header />
    <LayoutBase>{children}</LayoutBase>
  </>
)

export default Layout
