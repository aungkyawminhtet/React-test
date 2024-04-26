import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log(count);
    
    const increse = () => {
        setCount((prev) => prev +1);
    }

    const decrese = () => {
        count > 0 && setCount((prev) => prev -1);
    }
  return (
    <div className=' font-serif border-2 border-gray-800 p-10'>
        <h1 className=' text-2xl font-bold mb-3'>Conter: {count}</h1>
        <div className=' space-x-3'>
            <button onClick={increse} className=' bg-blue-600 px-4 py-1 rounded-lg'>Add +</button>
            <button onClick={decrese} className=' bg-blue-600 px-4 py-1 rounded-lg'>Sub -</button>
        </div>
    </div>
  )
}

export default Counter