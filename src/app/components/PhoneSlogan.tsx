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
      <Image 
        src='/phone-template.png'
        alt='Phone Template'
        width={250}
        height={250}
        
      />
    </div>
  );
}

export default PhoneSlogan;
