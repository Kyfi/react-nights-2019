import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as customerActions from '../../store/customer/actions'
import { Layout as LayoutBase } from './styled'
import Header from '../Header'

const Layout = ({ isAuthenticated, children, logout }) => (
  <>
    <Header isAuthenticated={isAuthenticated} logout={logout} />
    <LayoutBase>{children}</LayoutBase>
  </>
)

const mapStateToProps = state => ({
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

const mapDispatchToProps = {
  logout: customerActions.logout,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
)
