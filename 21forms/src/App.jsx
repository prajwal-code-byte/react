import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)


  const handleSubmit = (event) =>{
    event.preventDefault()

    let newErrors = {}

    if(name.trim().length < 2){
      newErrors.name = "At least 2 characters required!"
    }

    if(!email.includes('@')){
      newErrors.email = "Enter valid Email"
    }

    if(password.length < 6){
      newErrors.password = "At least 6 characters expected"
    }

    setErrors(newErrors)

    if(Object.keys(newErrors).length === 0){
      setSuccess(true)
      console.log({name, email, password});
      
    }

  }

  if(success){

    return <div>
      <h2>Registration Successful</h2>
      <h3>Hi, {name}</h3>
      <h4>You have registered with {email} email</h4>
    </div>
  }

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>

      <label>Name</label> <br />
      <input type="text" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      /> <br />

      {errors.name && <p style={{color : "red"}}>{errors.name}</p>}

      <label>Email</label> <br />
      <input type="text" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      /> <br />
      {errors.email && <p style={{color : "red"}}>{errors.email}</p>}

      <label>Password</label> <br />
      <input type="password" 
      value = {password}
      onChange={(e) => setPassword(e.target.value)}
      /> <br />
      {errors.password && <p style= {{color: "red"}}>{errors.password}</p>} 

      <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default App
