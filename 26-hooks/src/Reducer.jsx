import React from 'react'
import { useReducer } from 'react'

function countReducer(state, action){
    switch(action.type){
        case "INCREMENT" :
            return {count : state.count + 1}
        case "DECREMENT" :
            return {count : state.count - 1}
        case "RESET" :
            return {count : 0}
        case 'SET' :
            return {count : action.payload}
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(countReducer, {count : 0})

  return (
    <div>
      <h1>Count : {state.count}</h1>

      <button
      onClick={() => dispatch({type: "INCREMENT"})}
      >Increment</button>
      <button
      onClick={() => dispatch({type: "DECREMENT"})}
      >Decrement</button>
      <button
      onClick={() => dispatch({type: "RESET"})}
      >Reset</button>
      <button
      onClick={() => dispatch({type: "SET", payload: 10})}
      >Set to 10</button>
    </div>
  )
}

export default Reducer
