import React from 'react'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import InputField from '../../components/Input'
import { Button } from '../../components/Button/styled'

const SignUp = () => (
  <Layout>
    <H1>Sign Up</H1>
    <form action="">
      <InputField label={'Name'} type={'text'} />
      <InputField label={'Email'} type={'email'} />
      <InputField label={'Password'} type={'password'} />
      <InputField label={'Password again'} type={'password'} />
      <Button type={'submit'}>send</Button>
    </form>
  </Layout>
)

export default SignUp
