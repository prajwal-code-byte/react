import React, { useContext } from 'react'
import { countContext } from './App'

const Button = () => {
    const { count, setCount} = useContext(countContext)
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)
      }
        >increase</button>

        
      <button onClick={() => 
      {if(count === 0){
        alert('Cant go less than zero')
      }
      else{setCount(prev => prev - 1)}}
      }
        >decrease</button>
    </div>
  )
}

export default Button
