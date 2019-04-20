import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './routes'
import GlobalStyles from './globalStyles'
import { getCustomer } from './utils/customer'
import { configureStore } from './store'

const store = configureStore({
  customer: getCustomer(),
})

const App = () => (
  <Router>
    <Provider store={store}>
      <React.Fragment>
        <GlobalStyles />
        <Routes />
      </React.Fragment>
    </Provider>
  </Router>
)

export default App
