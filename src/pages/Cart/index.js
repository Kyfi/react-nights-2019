import React from 'react'
import Header from '../../components/Header'

const Index = () => (
  <>
    <Header />
    <h1>Cart</h1>
    <div>
      <span role={'img'} aria-label={'Cart is so empty'}>
        😢
      </span>{' '}
      Cart is so empty...
    </div>
  </>
)

export default Index
