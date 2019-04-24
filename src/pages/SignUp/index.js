import React from 'react'
import { Formik } from 'formik'

import { createCustomer } from '../../api/customers/createCustomer'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { schema } from './schema'
import urls from '../../constants/urls'

const SignUp = ({ globalError, history }) => {
  const state = {
    globalError: '',
  }

  const initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const handleOnSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      await createCustomer(values)
      history.push(urls.index)
    } catch (error) {
      state.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  return (
    <Layout>
      <H1 textAlign="center">Sign Up</H1>
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
            <Input name="firstName" label="First name" />
            <Input name="email" type="email" label="Email address" />
            <Input name="password" type="password" label="Password" />
            <Input
              name="passwordConfirm"
              type="password"
              label="Confirm password"
            />
            <Button type={'submit'} disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up' : 'Sign Up'}
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

export { SignUp }
