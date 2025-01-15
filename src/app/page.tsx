import React from 'react'
import Hero from './components/Hero'
import Customers from './components/Customers'
import ShowExamples from './components/ShowExamples'

function page() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Customers />
      <ShowExamples />
    </div>
  )
}

export default page