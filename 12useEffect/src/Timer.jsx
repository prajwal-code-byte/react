import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0)
    

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((count) => count + 1)
        }, 1000)

        return () => clearInterval(interval)

    }, [])
    
    

  return (
    <div>
      <h2>Count: {count} </h2>
    </div>
  )
}

export default Timer
