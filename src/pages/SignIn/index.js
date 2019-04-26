import React, { useState } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import { H1 } from '../../components/Typography/'
import Layout from '../../components/Layout'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button/styled'
import { Form, GlobalFormError } from '../../components/Form'
import { schema } from './schema'
import { getCustomerToken } from '../../api/customers/getCustomerToken'
import { getCustomer } from '../../api/customers/getCustomer'
import * as customerActions from '../../store/customer/actions'
import urls from '../../constants/urls'

const initialValues = {
  email: '',
  password: '',
}

const SignInPage = ({ login, history }) => {
  const [globalError, setGlobalError] = useState('')

  const handleOnSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await getCustomerToken({
        username: email,
        password,
      })
      const customer = await getCustomer(ownerId)
      login(customer)
      history.push(urls.myAccount)
    } catch (error) {
      setGlobalError(error.message)
    }
    setSubmitting(false)
  }

  return (
    <Layout>
      <H1>Sign In</H1>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleOnSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            {Boolean(globalError) && (
              <GlobalFormError>{globalError}</GlobalFormError>
            )}
            <Input name={'email'} label={'Email'} type={'email'} />
            <Input name={'password'} label={'Password'} type={'password'} />
            <Button type={'submit'} disabled={isSubmitting}>
              {isSubmitting ? 'Logging In..' : 'Log In'}
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

const mapDispatchToProps = {
  login: customerActions.login,
}

export const SignIn = connect(
  null,
  mapDispatchToProps
)(SignInPage)
