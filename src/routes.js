import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import urls from './constants/urls'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Logout } from './pages/Logout'
import { Cart } from './pages/Cart'
import { Account } from './pages/Account'
import { PrivateRoute } from './components/PrivateRoute'
import { NotFound } from './pages/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route
        path={urls.index}
        exact
        render={() => <Redirect to={urls.productList} />}
      />
      <Route path={urls.productList} exact component={ProductList} />
      <Route path={urls.signUp} exact component={SignUp} />
      <Route path={urls.signIn} exact component={SignIn} />
      <Route path={urls.logout} component={Logout} />
      <Route path={urls.cart} exact component={Cart} />
      <PrivateRoute path={urls.myAccount} component={Account} />
      <Route
        path={urls.productDetail(':productId')}
        component={ProductDetail}
      />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
