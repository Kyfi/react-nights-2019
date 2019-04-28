import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import Routes from './routes'
import GlobalStyles from './globalStyles'
import { getCustomer } from './utils/customer'
import { configureStore } from './store'
import { ErrorBoundary } from './components/ErrorBoundary'

const defaultStore = configureStore({
  customer: getCustomer(),
})

const App = ({ store }) => (
  <Router>
    <Provider store={store || defaultStore}>
      <React.Fragment>
        <GlobalStyles />
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </React.Fragment>
    </Provider>
  </Router>
)

export { App }
