import React from 'react'

import Header from '../../components/Header'

const SignUp = () => (
  <>
    <Header />
    <h1>Sign Up</h1>
    <form action="">
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <div>
        <label>Password again</label>
        <input type="password" />
      </div>
      <button type={'submit'}>Send</button>
    </form>
  </>
)

export default SignUp
