import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Homepage</Link>
          <span> | </span>
          <Link to="/sign-up">Sign Up</Link>
          <span> | </span>
          <Link to="/sign-in">Sign In</Link>
        </nav>
        <h1>E-Commerce app</h1>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/:productId" component={ProductDetail} />
        </Switch>
      </div>
    )
  }
}

export default App
