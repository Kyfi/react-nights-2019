/* eslint-env node */
const express = require('express')
const next = require('next')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('products/:id/:name', (req, res) => {
      const actualPage = '/products'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) {
        throw err
      }

      console.log('> Readdy on http://localhost:' + PORT) // eslint-disabled-line no-console
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
