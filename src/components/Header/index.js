import React from 'react'
import { withRouter } from 'react-router-dom'

import { Wrapper, Nav, NavLeft, NavRight, Link } from './styled'
import urls from '../../constants/urls'

const Header = ({ isAuthenticated }) => (
  <Wrapper>
    <Nav>
      <NavLeft>
        <Link to={urls.index}>{'Product List'}</Link>
      </NavLeft>
      <NavRight>
        {isAuthenticated ? (
          <>
            <Link to={urls.myAccount}>My Account</Link>
            <Link to={urls.logout}>Logout</Link>
          </>
        ) : (
          <>
            <Link to={urls.signIn}>Sign In</Link>
            <Link to={urls.signUp}>Sign Up</Link>
          </>
        )}
        <Link to={urls.cart}>{'My Cart'}</Link>
      </NavRight>
    </Nav>
  </Wrapper>
)

export default withRouter(Header)
