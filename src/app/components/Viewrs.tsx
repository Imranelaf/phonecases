import { Star } from 'lucide-react';

function Viewrs() {
    const users = [
        {src:"/users/user-1.png", alt:"user 1", left:"0"},
        {src:"/users/user-2.png", alt:"user 2", left:"24"},
        {src:"/users/user-3.png", alt:"user 3", left:"32"},
        {src:"/users/user-4.jpg", alt:"user 4", left:"44"},
        {src:"/users/user-5.jpg", alt:"user 5", left:"52"}
    ]

  return (
    <div className='mt-12 mb-16'>
        <div className='flex '>
        {users.map((user, index)=>(
            <img
            key={index}
            src={user.src}
            alt={user.alt}
            className={`h-16 w-16 bg-indigo-200 rounded-full border-2 border-black absolute left-${user.left}`}
            
          />
        ))}
        </div>
       <div className='absolute left-72 mt-2 '>
       
        <div className='flex'>
            {Array(5).fill(0).map((_, index)=>(
                <Star key={index} color='#15970c' />
            ))}
        </div>
        1.250 happy customers
        </div>


    </div>
  )
}

export default Viewrs