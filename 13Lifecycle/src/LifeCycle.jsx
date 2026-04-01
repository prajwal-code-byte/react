import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const LifeCycle = () => {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Component </button>
      {/* {console.log(show)} */}
      
      {show && <Child count = {count} setCount = {setCount}/>}
    </div>
  )
}

function Child({count, setCount}){
    useEffect(()=>{
        console.log("Mount Successful");
        
        return () => console.log("Unmount Successful");
        
    },[])

    useEffect(()=>{
        console.log("Updated Count");
        
    }, [count])
    
    return(
        <div>

            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    )
}

export default LifeCycle
