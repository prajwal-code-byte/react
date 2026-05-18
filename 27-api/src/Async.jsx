import React, { useEffect } from 'react'
import axios from 'axios'

const Async = () => {

    useEffect(() => {
        const getUsers = async () =>{
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(response.data);
                
            }
            catch(error){
                console.log(error);
                
            }
        }

        getUsers()
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Async
