import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'

class App extends Component {
  render() {
    return (
      <div>
        <h1>E-Commerce app</h1>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/:productId" component={ProductDetail} />
        </Switch>
      </div>
    )
  }
}

export default App
