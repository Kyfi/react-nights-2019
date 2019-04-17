import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as customerActions from '../../store/customer/actions'
import { removeToken } from '../../utils/token'
import { removeCustomer } from '../../utils/customer'
import { Layout as LayoutBase } from './styled'
import Header from '../Header'

class Layout extends React.Component {
  handleLogout = () => {
    this.props.logout()
    removeToken()
    removeCustomer()
    this.props.history.push('/')
  }

  render() {
    const { isAuthenticated, children } = this.props

    return (
      <>
        <Header />
        {isAuthenticated ? (
          <>
            <Link to="/my_account">My Account</Link>|
            <Link as="button" onClick={this.handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/sign_in">Log In</Link> |
            <Link to="/sign_up">Sign Up</Link>
          </>
        )}
        <LayoutBase>{children}</LayoutBase>
      </>
    )
  }
}

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
