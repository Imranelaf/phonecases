function Footer() {
  return (
    <div className="w-full h-fit lg:flex p-4 lg:px-14 bg-slate-50 text-gray-700 italic lg:justify-between border-t text-center">
        <div className="flex lg:mx-7 m-4 justify-center">
        ©   {new Date().getFullYear()} All rights reserved
        </div>
        <ul className="flex mx-5 underline justify-center">
            <li className="lg:mx-6 m-4">Terms</li>
            <li className="lg:mx-6 m-4">Privacy Policy</li>
        </ul>
        
    </div>
  )
}

export default Footer