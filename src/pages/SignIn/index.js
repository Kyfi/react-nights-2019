import React from 'react'

import Header from '../../components/Header'
import { H1 } from '../../components/Typography/'
import Layout from '../../components/Layout'
import InputField from '../../components/Input'
import { Button } from '../../components/Button/styled'

const Index = () => (
  <Layout>
    <Header />
    <H1>Sign In</H1>
    <form>
      <InputField label={'Email'} type={'email'} />
      <InputField label={'Password'} type={'password'} />
      <Button type={'submit'}>send</Button>
    </form>
  </Layout>
)

export default Index
