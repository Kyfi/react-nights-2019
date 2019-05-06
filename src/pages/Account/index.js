import React from 'react'
import { connect } from 'react-redux'

import { PrivatePage } from '../../components/PrivatePage'
import { H1 } from '../../components/Typography'

const AccountPage = ({ customer }) => (
  <PrivatePage>
    {() => (
      <main>
        <H1 data-testid="account-page">
          Welcome {customer.attributes.metadata.firstName}
        </H1>
      </main>
    )}
  </PrivatePage>
)

const mapStateToProps = state => ({
  customer: state.customer,
})

export const Account = connect(mapStateToProps)(AccountPage)
