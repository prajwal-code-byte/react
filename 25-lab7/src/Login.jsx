import React from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ({ setUser }) => {

    const navigate = useNavigate()
  return (
    <div>
      <h1>Please Login to Continue</h1>

      <button
      onClick={()=>{
        setUser({role : 'user'})
        navigate('/dashboard')
      }}
      >Login as User</button> <br />


      <button
      onClick={()=> {
      setUser({role : 'admin'})
      navigate('/dashboard')}
    }
      >Login as Admin</button>
    </div>
  )
}

export default Login
