import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import GlobalStyles from './globalStyles'

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Routes />
    </Router>
  </>
)

export default App
