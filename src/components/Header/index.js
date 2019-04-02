import React from 'react'

import { Nav, Link } from './styled'
import Urls from '../../constants/urls'

const Links = [
  {
    path: Urls.index,
    label: 'Homepage',
  },
  {
    path: Urls.signUp,
    label: 'Sign Up',
  },
  {
    path: Urls.signIn,
    label: 'Sign In',
  },
  {
    path: Urls.cart,
    label: 'Cart',
  },
]

const Header = () => (
  <Nav>
    {Links.map(link => (
      <Link key={link.path.toString()} to={link.path}>
        {link.label}
      </Link>
    ))}
  </Nav>
)

export default Header
