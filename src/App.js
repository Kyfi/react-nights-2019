import React from 'react'
import { Link } from 'react-router-dom'
import Urls from './constants/urls'

const App = () => (
  <div>
    <nav>
      <Link to={Urls.index}>Homepage</Link>
      <span> |</span>
      <Link to={Urls.signUp}>Sign Up</Link>
      <span> |</span>
      <Link to={Urls.signIn}>Sign In</Link>
      <span> |</span>
      <Link to={Urls.cart}>Cart</Link>
    </nav>
    <h1>E-Commerce app</h1>
  </div>
)

export default App
