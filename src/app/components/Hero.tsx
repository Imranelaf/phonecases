// Hero.tsx
import { CheckCheck } from 'lucide-react';
import PhoneSlogan from './UI/PhoneSlogan';
import Viewers from './UI/Viewers';

const features = [
  "High-quality, durable material", 
  "5 year print guarantee", 
  "Modern iPhone models supported"
];

function Hero() {
  return (
    <div className='w-full min-h-screen lg:px-12 px-8 py-8 lg:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
      <div className='lg:w-3/5 sm-full space-y-8 flex flex-col lg:items-start justify-center items-center'>
        <h1 className='text-4xl lg:text-7xl font-extrabold leading-tight'>
          Your Image on a{' '}
          <span className='bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-2 py-1 text-white'>
            Custom
          </span>{' '}
          Phone Case
        </h1>
        
        <p className='text-lg lg:text-xl text-gray-600 leading-relaxed'>
          <i>You are not only protecting your phone with our case, but also carrying your memories wherever you go.</i>
        </p> 
        
        <ul className='space-y-3'>
          {features.map((item, index) => (
            <li key={index} className='flex items-center font-semibold text-sm lg:text-base'>
              <CheckCheck className='h-5 w-5 lg:h-6 lg:w-6 mr-3 text-green-600 flex-shrink-0' />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <Viewers />
      </div>
      
      <div className='lg:w-2/5 w-full flex justify-center'>
        <PhoneSlogan />
      </div>
    </div>
  )
}

export default Hero;
