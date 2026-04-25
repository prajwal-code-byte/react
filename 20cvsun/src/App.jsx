import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {
  const nameRef = useRef(null)
  
  function handleSubmit(event){
    event.preventDefault()
    console.log(nameRef.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        id='textInput'
        ref={nameRef}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
