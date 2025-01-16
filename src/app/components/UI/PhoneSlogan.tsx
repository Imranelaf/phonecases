import Image from 'next/image';
import React from 'react';

function PhoneSlogan() {
  return (
    <div className="w-auto h-auto pl-10 lg:ml-5 relative">
      <div className="absolute left-72 hidden lg:block">
        <Image 
          src='/your-image.png'
          alt='Your Image'
          width={200}
          height={200}
        />
      </div>
      <div className='relative'>
      <Image 
        src='/phone-template.png'
        alt='Phone Template'
        width={250}
        height={250}
        className='absolute z-50 '
        
      />
      <Image 
      src='/testimonials/1.jpg'
      alt='dog'
      width={250}
      height={250}
      className='absolute object-cover lg:rounded-[45px] rounded-[25px]'
      />
      </div>
    </div>
  );
}

export default PhoneSlogan;
