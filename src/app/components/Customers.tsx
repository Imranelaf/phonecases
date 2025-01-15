import React from 'react'
import { Underlane } from './Underline'
import { Star } from 'lucide-react'
import Image from 'next/image'

function Customers() {
  return (
    <div className='min-h-screen h-fit w-full  bg-slate-50 grainy-dark'>
      <div className=' text-center text-7xl font-extrabold text-gray-900 p-14'>
        What our
        <span className='relative px-2'>
          customers{'   '}
          <Underlane.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
        </span> say ?</div>


      <section>
        <div className='lg:flex lg:p-16 lg:mx-12'>
          <div className='lg:w-1/2 p-8 m-8 lg:m-1 p-1'>
            <div className='flex m-2'>
              {Array(5).fill(0).map((_, index) => (
                <Star key={index} className='w-6 h-6 text-green-600 fill-green-600' />
              ))}
            </div>

            <div>
              <p className='font-2xl mt-7 tracking-wider'>
                "The case feels durable and I even got a compliment on the design.
                Had the case for two and a half months now and <span className='bg-gray-600 p-1 text-white'>the image is super clear</span> ,
                on the case I had before, the image started fading into yellow-ish color after a couple weeks.
                Love it."
              </p>
              <div className='flex  m-5'>
                <Image
                  src='/users/user-1.png'
                  alt="user_Image"
                  height={50}
                  width={50}
                  className='rounded-full'
                />
                <h2 className='m-3 font-bold'>Jonathan</h2>
              </div>
            </div>

          </div>

          <div className='lg:w-1/2 p-8 m-8 lg:m-1 p-1'>
            <div className='flex m-2'>
              {Array(5).fill(0).map((_, index) => (
                <Star key={index} className='w-6 h-6 text-green-600 fill-green-600' />
              ))}
            </div>

            <div>
              <p className='font-2xl mt-7 tracking-wider'>
              "I usually keep my phone together with my keys in my pocket and that led
               to some pretty heavy scratchmarks on all of my last phone cases. This one,
                besides a barely noticeable scratch on the corner, 
                <span className='bg-gray-600 p-1 text-white'>looks brand new after about half a year.  </span>
                I dig it"
              </p>
              <div className='flex  m-5'>
                <Image
                  src='/users/user-2.png'
                  alt="user_Image"
                  height={50}
                  width={50}
                  className='rounded-full object-fit'
                />
                <h2 className='m-3 font-bold'>Amirah</h2>
              </div>
            </div>

          </div>
        </div>


      </section>
    </div>
  )
}

export default Customers