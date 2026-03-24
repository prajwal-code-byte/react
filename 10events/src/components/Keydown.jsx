import React from 'react'

const Keydown = () => {

    function kdFn(e){
        console.log((e.target.value))
    }

  return (
    <input type="text" 
    onKeyDown={kdFn}
    
    placeholder='Type something'/>
  )
}

export default Keydown
