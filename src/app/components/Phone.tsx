import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface PhoneProps {
   
    imgSrc: String
}

function Phone() {
  return (
    <div className={cn('relative pointer-events-none z-50 overflow-hidden')}>
        <Image 
        src='/phone-template.png'
        alt='Phone Template'
        width={250}
        height={250}
        className='pointer-events-none z-50 select-none'
        
      />
      <div className='absolute -z-10 inset-0'>
      <Image 
      src='/testimonials/1.jpg'
    
      alt='dog'
      width={250}
      height={250}
      className='object-cover min-w-full min-h-full'
      />
      </div>
    </div>
  )
}

export default Phone