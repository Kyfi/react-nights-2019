import React from 'react'
import { connect } from 'react-redux'

import { Layout as LayoutBase } from './styled'
import Header from '../Header'

const Layout = ({ isAuthenticated, children, dataTestId }) => (
  <>
    <Header isAuthenticated={isAuthenticated} />
    <LayoutBase data-testid={dataTestId}>{children}</LayoutBase>
  </>
)

const mapStateToProps = state => ({
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

export default connect(mapStateToProps)(Layout)
