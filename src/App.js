import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './routes'
import store from './store'
import GlobalStyles from './globalStyles'

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
