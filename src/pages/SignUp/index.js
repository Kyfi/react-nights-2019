import React, { Component } from 'react'
import { Formik } from 'formik'

import { createCustomer } from '../../api/customers/createCustomer'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { schema } from './schema'

class SignUp extends Component {
  state = {
    globalError: '',
    hasSignedUp: false,
  }

  initialValues = {
    firstName: 'igor',
    email: 'igor@seznam.cz',
    password: 'genius123',
    passwordConfirm: 'genius123',
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      console.log('success')
      this.setState({
        hasSignedUp: true,
      })
      await createCustomer(values)
      this.props.history.push('/account')
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  renderSuccess = () => (
    <Layout>
      <H1 textAlign={'center'}>You've signed up!</H1>
    </Layout>
  )

  render() {
    const { globalError } = this.state

    if (this.state.hasSignedUp) return this.renderSuccess()

    return (
      <Layout>
        <H1 textAlign="center">Sign Up</H1>
        <Formik
          initialValues={this.initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
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
}

export { SignUp }
