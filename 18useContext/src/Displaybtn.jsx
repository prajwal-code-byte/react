import React, { useContext } from 'react'
import { countContext } from './App'
import Button from './Button'

const Displaybtn = () => {
    const { count } = useContext(countContext)
  return (
    <div>
      <h2>{count}</h2>
      <Button /> 
    </div>
  )
}

export default Displaybtn
