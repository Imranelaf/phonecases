import Image from 'next/image';

function PhoneSlogan() {
  return (
    <div className="relative w-full max-w-sm mx-auto overflow-visible">
      <div className="absolute -top-14 -right-9 lg:-right-8 opacity-80 z-0">
        <Image 
          src='/your-image.png'
          alt='Your Image'
          width={120}
          height={120}
          className="lg:w-[150px] lg:h-[150px]"
        />
      </div>
      
     
      <div className='relative w-[250px] h-[250px]mx-auto'>
        
       
          <Image 
            src='/testimonials/1.jpg'
            alt='Custom phone case preview'
              
            fill
            className='object-cover rounded-[45px]'
          />
        
        
        
        <Image 
          src='/phone-template.png'
          alt='Phone Template'
          width={250}
          height={250}
          className='relative z-20 w-full h-full object-contain'
        />
      </div>
      
      
      <div className="absolute bottom-0 -left-4 w-10 h-10 bg-green-500 rounded-full opacity-20 animate-pulse z-0"></div>
      <div className="absolute top-4 left-2 w-6 h-6 bg-blue-500 rounded-full opacity-30 animate-pulse delay-1000 z-0"></div>
    </div>
  );
}

export default PhoneSlogan;