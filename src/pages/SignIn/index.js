import React from 'react'

import { H1 } from '../../components/Typography/'
import Layout from '../../components/Layout'
import InputField from '../../components/Input'
import { Button } from '../../components/Button/styled'

const Index = () => (
  <Layout>
    <H1>Sign In</H1>
    <form>
      <InputField id={'email1'} label={'Email'} type={'email'} />
      <InputField id={'pwd1'} label={'Password'} type={'password'} />
      <Button type={'submit'}>send</Button>
    </form>
  </Layout>
)

export default Index
