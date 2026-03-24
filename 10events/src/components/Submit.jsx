import React, { useState } from 'react'

const Submit = () => {

    const [name, setName] = useState('')
    
    function submitFn(e){
        e.preventDefault()
        alert('Form has been submitted ' + name)
    }

    function naming(e){
        setName(e.target.value) //value from event
    }

  return (
    <form onSubmit={submitFn}>
    <input type="text" onChange={naming}/> {/* target this element*/}
        <button >
            Submit
        </button>
    </form>
  )
}

export default Submit
