import config from '../config'

// get token for authorization our data source
export const getToken = () =>
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
