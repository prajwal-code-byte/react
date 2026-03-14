function Card(anything){
    return (
         
      <div className="card">

        <img src={anything.image} alt="" />
        <h2>{anything.name}, {anything.age}</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsa.</p>
        
        <button>Click Here!</button>

      </div>
   
    )
}

export default Card