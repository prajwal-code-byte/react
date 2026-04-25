import Displaybtn from './Displaybtn'
import { createContext } from 'react'
import { useState } from 'react'

//useContext

export const countContext = createContext()

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <countContext.Provider value = {{count, setCount}}>
        <Displaybtn />
      </countContext.Provider>
    </div>
  )
}

export default App
