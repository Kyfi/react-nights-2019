import React from 'react'

import { Wrapper, Nav, Link } from './styled'
import urls from '../../constants/urls'

const links = [
  {
    path: urls.index,
    label: 'Homepage',
  },
  {
    path: urls.myAccount,
    label: 'My Account',
  },
  {
    path: urls.cart,
    label: 'Cart',
  },
  {
    path: urls.signUp,
    label: 'Sign Up',
  },
  {
    path: urls.signIn,
    label: 'Sign In',
  },
]

const Header = () => (
  <Wrapper>
    <Nav>
      {links.map(link => (
        <Link key={link.path.toString()} to={link.path}>
          {link.label}
        </Link>
      ))}
    </Nav>
  </Wrapper>
)

export default Header
