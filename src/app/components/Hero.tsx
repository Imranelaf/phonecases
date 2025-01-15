import React from 'react'
import { CheckCheck } from 'lucide-react';
import PhoneSlogan from './PhoneSlogan';
import Viewrs from './Viewrs';

function Hero() {
    const cheking = ["High-quality, durable material", "5 year print guarantee", "Modern iPhone models supported"  ]
  return (
    <div className='w-full h-screen m-12 flex flex-col lg:flex-row mb-20 '>
        <div className='p-2 lg:w-3/5'>
            <h1 className='text-3xl lg:text-7xl font-extrabold'>Your Image on a <span className='bg-green-500 rounded-lg text-white'>Custom</span> Phone Case</h1>
            <p className='mt-8 lg:text-xl'><i>You are not only protecting your phone with our case, but also carrying your memories wherever you go.</i></p> 
            <ul className='mt-8'>
                {cheking.map((item, index)=>(
                    <li key={index} className='flex font-bold text-base mt-2'>
                    <CheckCheck color='#15970c' className='h-6 w-6 mr-2' />
                    {item}
                    </li>
                ))}
            </ul>
            <Viewrs />
        </div>
        <div className='w-1/2'>
        <PhoneSlogan />
        </div>
    </div>
  )
}

export default Hero