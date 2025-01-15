import { ArrowRight } from 'lucide-react'
import React from 'react'

function Navbar() {
    return (
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b p-2 border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <div className='flex space-between justify-around '>
                <div className='text-green-600 font-semibold'>Phone<span className='text-black'>Case</span></div>
                <div>
                    <button className='bg-green-600 flex p-1 px-4 rounded-sm shadow-md text-white text-sm hover:bg-green-500'>Create case  <ArrowRight className='ml-1 text-sm' /></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar