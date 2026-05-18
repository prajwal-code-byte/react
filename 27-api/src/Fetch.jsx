import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Fetch = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            if(!response.ok){
                console.log('Failed to Fetch the data');
            }
            return response.json()
        })
        .then((data)=>{
           setUsers(data);
           console.log(data);
                      
        })
        .catch((error) =>{
            console.log(error);
            
        })
    }, [])

  return (
    <div>
      <h1>User info</h1>
      {users.map((user)=>{
        return<div key={user.id}>
            <h3>
            {user.name}
            </h3>
            <p>
            {user.email}
            </p>
            <p>
                {user.address.city}
            </p>
            <hr />
        </div>
      })

      }
    </div>
  )
}

export default Fetch
