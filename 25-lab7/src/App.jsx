import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import { useState } from 'react'
import Dashboard from './Dashboard'
import ProtectedRoute from './ProtectedRoute'

const App = () => {

  const [user, setUser] = useState(null) 

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/dashboard' element={
          <ProtectedRoute user={user}>
            <Dashboard user={user} setUser={setUser}/>
          </ProtectedRoute>
          }/>

        <Route path='/' element={<Login setUser={setUser}/>} />
      </Routes>
    </div>
  )
}

export default App
