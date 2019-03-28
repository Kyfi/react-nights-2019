import React, { Component } from 'react'

// Config for API (fetch products..)
import config from './config.js'

// get token for authorization our data source
const getToken = () =>
  fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: config.clientId,
      scope: config.scope,
    }),
  }).then(res => res.json())

// get all products list (skus) from API
const getSkus = access_token =>
  fetch(`${config.apiUrl}/api/skus`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  }).then(res => res.json())

class App extends Component {
  state = {
    isLoading: true, // stop confusing users, what happening until fetch data
    products: {},
  }

  async componentDidMount() {
    const { access_token } = await getToken()
    const products = await getSkus(access_token)

    this.setState({ products, isLoading: false })
  }

  render() {
    const {
      isLoading,
      products: { data },
    } = this.state

    return (
      <div>
        <h1>E-Commerce app</h1>
        {isLoading && 'loading...'}
        {data && (
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <h2>{item.attributes.name}</h2>
                <img
                  src={item.attributes.image_url}
                  height="60"
                  alt={item.attributes.description}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
