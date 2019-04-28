import React, { useState } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import { H1 } from '../../components/Typography/'
import Layout from '../../components/Layout'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button/styled'
import { Form, GlobalFormError } from '../../components/Form'
import { schema } from './schema'
import { AsyncValidationError } from '../../utils/errors'
import * as customerActions from '../../store/customer/actions'

const initialValues = {
  email: '',
  password: '',
}

const SignInPage = ({ login, history }) => {
  const [formAsyncError, setFormAsyncError] = useState('')

  const handleOnSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)
      await login({
        username: email,
        password,
        push: history.push,
      })
    } catch (error) {
      if (error instanceof AsyncValidationError) {
        setFormAsyncError(error.message)
      } else {
        toast.error(
          `There was an error while logging in, please try again later!`
        )
      }
    }
    setSubmitting(false)
  }

  return (
    <Layout dataTestId="login-page">
      <H1>Sign In</H1>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleOnSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            {Boolean(formAsyncError) && (
              <GlobalFormError>{formAsyncError}</GlobalFormError>
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
