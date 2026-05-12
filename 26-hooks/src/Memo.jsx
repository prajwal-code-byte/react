import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0)
    const [Theme, setTheme] = useState(false)

    const squaredN = useMemo(() =>{
        console.log("Calculating");
        return count * count
    }, [count])

    
  return (
    <div
    style={{
        backgroundColor: Theme ? "white" : 'black',
        color : Theme ? "black" : 'white'
    }}
    >
      <h1>Count : {count}</h1>
        <h1>Squared Valued : {squaredN}</h1>

      <button
      onClick={() => setCount(prev => prev + 1)}
      >Increment</button>

      <button
      onClick={() => setTheme(!Theme)}
      >Toggle btn</button>
    </div>
  )
}

export default Memo
