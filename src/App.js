import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyAccount from './pages/User'
import Cart from './pages/Cart'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Homepage</Link>
          <span> | </span>
          <Link to="/sign_up">Sign Up</Link>
          <span> | </span>
          <Link to="/sign_in">Sign In</Link>
          <span> | </span>
          <Link to="/cart">Cart</Link>
        </nav>
        <h1>E-Commerce app</h1>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/sign_up" exact component={SignUp} />
          <Route path="/sign_in" exact component={SignIn} />
          <Route path="/my_account" exact component={MyAccount} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/:productId" component={ProductDetail} />
        </Switch>
      </div>
    )
  }
}

export default App
