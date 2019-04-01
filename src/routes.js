import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import Urls from './constants/urls'

const Routes = () => {
  return (
    <Switch>
      <Route path={Urls.index} exact component={ProductList} />
      <Route path={Urls.signUp} exact component={SignUp} />
      <Route path={Urls.signIn} exact component={SignIn} />
      <Route path={Urls.cart} exact component={Cart} />
      <Route
        path={Urls.productDetail(':productId')}
        component={ProductDetail}
      />
    </Switch>
  )
}

export default Routes
