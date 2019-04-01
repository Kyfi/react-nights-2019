import React from 'react'
import { Link } from 'react-router-dom'

import Urls from '../../constants/urls'

const Header = () => (
  <nav>
    <Link to={Urls.index}>Homepage</Link>
    <span> |</span>
    <Link to={Urls.signUp}>Sign Up</Link>
    <span> |</span>
    <Link to={Urls.signIn}>Sign In</Link>
    <span> |</span>
    <Link to={Urls.cart}>Cart</Link>
  </nav>
)

export default Header
