import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { ToastContainer, toast } from 'react-toastify'

import Routes from './routes'
import GlobalStyles from './globalStyles'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { ErrorBoundary } from './components/ErrorBoundary'
import { getCustomer } from './utils/customer'
import { configureStore } from './store'

const defaultStore = configureStore({
  customer: getCustomer(),
})

class MyApp extends App {

  static async getInitialProps({ Component, ctx }){
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Provider store={this.props.store}>
          <React.Fragment>
            <GlobalStyles />
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </React.Fragment>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(MyApp)
