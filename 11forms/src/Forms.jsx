import { useRef } from 'react'
import { useState } from 'react'

const Forms = () => {

  const nameRef = useRef()
  const emailRef = useRef()

  function SubmitFn(e){
    e.preventDefault()

    const name = nameRef.current.value
    const email = emailRef.current.value


    if(name.trim() === ""){
      alert("Invalid name")
      return
    }
    
    if(email.trim() === ""){
      alert("Invalid Email")
      return
    }

    if(!email.includes('@')){
      alert('Invalid email it do not have @')
      return
    }

    alert("Submitted Successfully")

  }

  return (
    <div>
      <form onSubmit={SubmitFn}>
        <h2>Simple Form</h2>

        <input type="text" 
        placeholder='Enter Name' 
        ref={nameRef}
        />
        <br />

        <input type="text" placeholder='Enter Email' 
        ref={emailRef}
        />
        <br />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Forms
