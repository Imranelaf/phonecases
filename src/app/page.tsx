import React from 'react'
import Hero from './components/Hero'
import Customers from './components/Customers'

function page() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Customers />
    </div>
  )
}

export default page