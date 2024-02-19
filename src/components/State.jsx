import React, { useEffect, useState } from 'react'


const State = () => {
  const [count, setCount] = useState(0);

  const handleIncrement= () =>{
    setCount((prev) => prev + 1);
  }

  const handleDecrement= () =>{
    setCount((prev) => prev - 1);
  }
  return (
    <div>
        <p className='text-center'>Hello State</p>
        <div className='flex gap-3 border justify-center mt-10'>
          <span className='px-2 bg-green-900' onClick={handleDecrement}>-</span>
          <p>{count}</p>
          <span className='px-2 bg-green-900 hover:cursor-pointer' onClick={handleIncrement}>+</span>
        </div>
    </div>
  )
}

export default State