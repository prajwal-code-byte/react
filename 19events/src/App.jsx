import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [log, setLog] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  function addLog(text){
    setLog(log.concat(text))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    addLog("Submit Successful")
    setName("")
  }

  const appTheme = {
    backgroundColor: darkMode ? "white" : "black",
    color: darkMode ? "black" : "white",
    height: "100vh"
  };

  return (
    <div style={appTheme}>
      <h3>Smart Interactive Panel</h3>
      <button onClick={()=> setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Enter your name'
        value = {name}
        onChange={(e) =>{
          setName(e.target.value)
          addLog("typing...")
        }}

        onFocus={() => addLog("Input focused")}
        onBlur={ () => addLog("Focus lost")}
        onCopy={()=> addLog("copied ")}
        onPaste={() => addLog("Pasted")}
        onCut={() => addLog("Cut")}
        />
      </form>

      <button onClick={() => {addLog("Submitted via button")
        setName('')}
      }
      onMouseEnter={() => addLog("Mouse Hover")}
      onDoubleClick={() => {addLog("Form Reset")
        setName("")
      }}
      >Submit</button>

      <h3>Logs:</h3>
      <ul>
        {
          log.map((item, index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
