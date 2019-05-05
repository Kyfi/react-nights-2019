/* eslint-env node */

const React = require('react')
const ReactDomServer = require('react-dom/server')
const App = require('../src/pages/ProductList')

const express = require('express')
const app = express()
const port = 3000

app.get('/products', async (req, res ) => {
  const props = await App.getInitialProps()
  const html = ReactDomServer.renderToString(<Products {...props} />)
  res.send(html)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
