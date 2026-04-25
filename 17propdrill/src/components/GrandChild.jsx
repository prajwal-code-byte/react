import React from 'react'
import { useContext } from 'react'
import { nameContext } from '../App'

const GrandChild = () => {
    const username = useContext(nameContext)
  return (
    <div>
      <h2>
        Hello, {username}
      </h2>
    </div>
  )
}

export default GrandChild
