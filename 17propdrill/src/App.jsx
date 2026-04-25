import React from 'react'
import Parent from './components/Parent'
import { createContext } from 'react'

export const nameContext = createContext()
// making it global

const App = () => {
  const name = "Intellipaat"
  return (
    <div>
      <nameContext.Provider value = {name}>
        <Parent />
      </nameContext.Provider> 
    </div>
  )
}

export default App
