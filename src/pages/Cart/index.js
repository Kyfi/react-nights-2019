import React from 'react'
import Header from '../../components/Header'
import { H1 } from '../../components/Typography'
import Layout from '../../components/Layout'

const Index = () => (
  <Layout>
    <Header />
    <H1>Cart</H1>
    <div>
      <span role={'img'} aria-label={'Cart is so empty'}>
        😢
      </span>{' '}
      Cart is so empty...
    </div>
  </Layout>
)

export default Index
