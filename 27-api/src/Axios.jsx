import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            // console.log(response.data);
            setUsers(response.data)
            
        }).catch((error) => {
            console.log(error);
            
        })
    }, [])
    


  return (
    <div>
      <h1>User info</h1>
      {
        users.map((user) =>{
            return <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <hr />
            </div>
        })
      }
    </div>
  )
}

export default Axios
