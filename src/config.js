export default {
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret:
    'eac6464b9c4840222b1258732cb51c5db35ab472be4ba305b24813c8c0076839',
  scope: process.env.REACT_APP_SCOPE,
  apiUrl: process.env.REACT_APP_APIURL,
}

const dev = process.env.NODE_ENV !== 'production'

export const server = dev
  ? 'https://react-nights.commercelayer.io'
  : 'xx'
