import { Star } from 'lucide-react';

function Viewrs() {
    const users = [
        {src:"/users/user-1.png", alt:"user 1"},
        {src:"/users/user-2.png", alt:"user 2"},
        {src:"/users/user-3.png", alt:"user 3"},
        {src:"/users/user-4.jpg", alt:"user 4"},
        {src:"/users/user-5.jpg", alt:"user 5"}
    ]

  return (
    <div className='mt-12 mb-16'>
        <div className='lg:flex '>
        {users.map((user, index)=>(
            <img
            key={index}
            src={user.src}
            alt={user.alt}
            className={`h-16 w-16 bg-indigo-200 rounded-full ring-2 border-black inline-block`}
            
          />
        ))}
        <div className='m-5'>
        <div className='flex '>
            {Array(5).fill(0).map((_, index)=>(
                <Star key={index} className='w-4 h-4 text-green-600 fill-green-600' />
            ))}
        </div>
        <p className='font-bold'>
        1.250 happy customers
        </p>
        </div>
        </div>
       
       
        
    


    </div>
  )
}

export default Viewrs