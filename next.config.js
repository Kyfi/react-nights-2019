// eslint-disable-next-line no-console
require('dotenv').config()

const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = withTypescript(
  withCSS({
    cssModules: true,
    webpack: config => {
      config.plugins = config.plugins || []

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env.development.local'),
          systemvars: true,
        }),
      ]

      return config
    },
  })
)
