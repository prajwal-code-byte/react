import React from 'react'

const CardOne = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="image" />
        <h2>{props.name}, {props.age}</h2>
        <p>Lorem ipsum dolor sit amet.</p>

        <button>View Profile</button>
      
    </div>
  )
}

export default CardOne
