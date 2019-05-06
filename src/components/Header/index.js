import React from 'react'
import Link from 'next/link'

import { Wrapper, Nav, NavLeft, NavRight, StyledLink } from './styled'
import urls from '../../constants/urls'

const Header = ({ isAuthenticated }) => (
  <Wrapper>
    <Nav>
      <NavLeft>
        <Link href={urls.index}><StyledLink>{'Product List'}</StyledLink></Link>
      </NavLeft>
      <NavRight>
        {isAuthenticated ? (
          <>
            <Link href={urls.myAccount}><StyledLink>{'My Account'}</StyledLink></Link>
            <Link href={urls.logout}><StyledLink>{'Logout'}</StyledLink></Link>
          </>
        ) : (
          <>
            <Link href={urls.signIn}><StyledLink>{'Sign In'}</StyledLink></Link>
            <Link href={urls.signUp}><StyledLink>{'Sign Up'}</StyledLink></Link>
          </>
        )}
        <Link href={urls.cart}><StyledLink>{'My Cart'}</StyledLink></Link>
      </NavRight>
    </Nav>
  </Wrapper>
)

export default Header
