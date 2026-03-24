import React from 'react'

const App = () => {

  function ChangeFn(anything){
    console.log(anything.target.value);
    
  }

  return (
    <input type="text" onChange={ChangeFn} placeholder='type something' />
  )
}

export default App
