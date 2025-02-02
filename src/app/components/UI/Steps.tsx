'use client'

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { CheckCheck } from 'lucide-react';

const STEPS = [
  {
    s: 'Step 1: ',  
    name: 'Add image',
    description: 'Choose an image for your case',
    number: 0,
  },
  {
    s: "Step 2: ",
    name: 'Customize design',
    description: 'Make the case yours',
    number: 1,
  },
  {
    s: "Step 3: ",
    name: 'Summary',
    description: 'Review your final design',
    number: 2,
  },
]

export default function Steps() {
  const pathname = usePathname()
  const [steps, setSteps] = useState<number>(0)

  useEffect(() => {
    if(pathname.endsWith('upload')){
      setSteps(0)
    }else if (pathname.endsWith('design')) {
      setSteps(1)
    } else if (pathname.endsWith('final')) {
      setSteps(2)
    }
  }, [pathname])

  return (
    <div className="w-10/12 min-h-[5rem] flex items-center justify-around m-5 text-gray-600 bg-slate-100 border border-gray-300 rounded-2xl">
      {STEPS.map((step) => (
        <div
          key={step.number}
          className={`w-auto h-full flex flex-col justify-center items-center text-sm lg:text-base ${
            step.number < steps ? 'text-green-600' : 'text-gray-600'
          }`}
        >
          <p>{step.s}</p>
          
          {
            step.number >= steps ? (
              <>
              <p className="italic">{step.name}</p>
            <p className="hidden lg:block">{step.description}</p>
            </>)
             : null
          }
          
          {step.number < steps ? (<div className="flex"> <CheckCheck /> <p className="mx-1">Completed</p></div>) : <p>Progress</p>}
        </div>
      ))}
    </div>
  )
}
