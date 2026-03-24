import React, { useEffect, useState } from 'react'



const Timer = () => {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning])


  return (
    <div>
    <h2>Count: {count}</h2>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => {setIsRunning(false), setCount(0)}}>Reset</button>

    </div>

  )
}

export default Timer
