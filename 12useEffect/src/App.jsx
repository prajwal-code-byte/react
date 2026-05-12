import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(1000)

  useEffect(() =>{
      // setCount(prev => prev + 1)
      console.log('render happened', count); 
  })

  // Mounting
  useEffect(()=>{
    const interval = setInterval(() =>{
      setCount(prev => prev + 1)
    }, 1000)

    // cleanup
    return() => clearInterval(interval)
  }, [])

  useEffect(()=>{
    console.log('Value changed : ', value);
  },[value])

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Value: {value}</h1>
      <button
      onClick={() => setValue(prev => prev + 1000)}
      >Change Value</button>

    </div>
  )
}

export default App
