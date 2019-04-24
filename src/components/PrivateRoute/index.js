import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import urls from '../../constants/urls'

const PrivateRouteComponent = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        if (isAuthenticated) {
          return <Component {...routeProps} />
        }

        return (
          <Redirect
            to={{
              pathname: urls.signIn,
              state: {
                from: routeProps.location.pathname,
              },
            }}
          />
        )
      }}
    />
  )
}

const mapsStateToProps = state => ({
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

export const PrivateRoute = connect(mapsStateToProps)(PrivateRouteComponent)
