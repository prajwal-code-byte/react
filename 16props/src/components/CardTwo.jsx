import React from 'react'

const CardTwo = (props) => {

  function handleClick(){
    console.log("Card Clicked");
    
  }
  function cardFn(e){
    e.stopPropagation()
    console.log("Add to cart"); 
  }
  function viewFn(e){
    e.stopPropagation()
    console.log("View more"); 
  }

  return (
    <div className='card' onClick={handleClick}>
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
      <h4>Since {props.since}</h4>

      <p>{props.about}</p>

      <button onClick={cardFn}>Add to Cart</button>
      <button onClick={viewFn}>View More</button>
      
    </div>
  )
}

export default CardTwo
