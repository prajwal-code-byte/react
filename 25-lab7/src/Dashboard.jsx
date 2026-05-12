import React from 'react'

const Dashboard = ({user, setUser}) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Logged in as {user.role}</p>

      <button
      onClick={() => setUser(null)}
      >Logout</button>


        {user.role === 'admin' && <div>
        <h1>Admin Panel</h1>
        <p>The secret password : "abcd"</p>
        </div>}

        {user.role === 'user' && <div>
        <h1>Admin Panel</h1>
        <p>Access Denied</p>
        </div>}


    </div>
  )
}

export default Dashboard
