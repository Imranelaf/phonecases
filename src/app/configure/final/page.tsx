'use client';
import { useImageStore } from '@/Zustand/store';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const IPHONES = [
  'Iphone 11', 'Iphone 11 pro', 'Iphone 11 pro max',
  'Iphone 12', 'Iphone 12 pro', 'Iphone 12 pro max',
  'Iphone 13', 'Iphone 13 pro', 'Iphone 13 pro max',
  'Iphone 14', 'Iphone 14 pro', 'Iphone 14 pro max',
  'Iphone 15', 'Iphone 15 pro', 'Iphone 15 pro max',
];

const COLORS = [
  { name: 'Cadmium Red', value: 'Cadmium Red', hex: '#D22B2B' },
  { name: 'Black', value: 'Black', hex: '#000000' },
  { name: 'Garnet', value: 'Garnet', hex: '#9A2A2A' },
  {name: 'Tyrian Purple', value:'Tyrian Purple', hex: '#630330'}
];

function Page() {
  const imageUrl = useImageStore((state) => state.imageUrl);
  const newWidth = useImageStore((state) => state.newWidth);
  const newHeight = useImageStore((state) => state.newHeight);
  const configId = useImageStore((state) => state.configId);

  const [color, setColor] = useState<string>(COLORS[0].value);

  if (!imageUrl) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1>No image found. Please upload an image.</h1>
      </div>
    );
  }

  const handleColorChange = (selectedColor: string) => {
    setColor(selectedColor);
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Phone Preview Section */}
      <div className="w-full lg:w-1/2 min-h-[600px] flex flex-col items-center p-5">
        <div className="relative h-[500px] w-[245px] rounded-[40px] overflow-hidden">
          <Image
            src="/phone-template.png"
            alt="Phone Template"
            width={245}
            height={500}
            className="absolute z-50 pointer-events-none"
          />
          {/* User's Image */}
          <img
            src={imageUrl}
            alt="User's picture"
            style={{ width: `${newWidth}px`, height: `${newHeight}px` }}
            className="object-cover"
          />
        </div>
      </div>

      {/* Configuration Section */}
      <div className="lg:w-5/12 w-auto m-2 flex flex-col lg:px-12 px-4 mb-12 py-5 w-auto h-fit border border-black rounded-xl bg-slate-50">
       <div className='w-full flex justify-center'>
        <p className='lg:m-5 lg:text-2xl text-xl m-3'>Customize your phone</p>
        </div>
        <p className="italic lg:text-xl mt-5">Color: {color}</p>
        <div className="flex">
          {COLORS.map((color) => (
              <button
                key={color.value}
                onClick={() => handleColorChange(color.value)}
                className="w-6 h-6 rounded-full lg:m-5 m-2"
                style={{ backgroundColor: color.hex }}
                aria-label={`Select ${color.name} color`}
              />
  
          ))}
        </div>

        <div>
          <p className="italic lg:text-xl mt-5">Model</p>
          <select className="lg:w-11/12 p-3 italic lg:m-5 m-3 bg-transparent border border-black focus:ring-green-500 ">
            {IPHONES.map((iphone) => (
              <option key={iphone} value={iphone}>
                {iphone}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="italic lg:text-xl my-5">Price: <span className="lg:text-2xl text-xl italic text-green-600 mx-3">14$</span></p>
          
        </div>
        <Link href={`/payment?id=${configId}`} className='w-auto bg-green-600 justify-center flex p-1 lg:px-4 px-2 rounded-sm shadow-md text-white text-lg font-semibold tracking-wide text-sm hover:bg-green-500 lg:m-5 my-4'>Continue</Link>
      </div>
    </div>
  );
}

export default Page;