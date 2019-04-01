import React from 'react'

import Header from '../../components/Header'

const Index = () => (
  <>
    <Header />
    <h1>Sign In</h1>
    <form action="">
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <button type={'submit'}>Send</button>
    </form>
  </>
)

export default Index
