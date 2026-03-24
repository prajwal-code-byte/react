import React from 'react'

const Hero = () => {
  return (
    <div className="section">
        <div className="hero-txt">
            <p>
                Hi, Myself
            </p>

            <h1>
                Adam Smith
            </h1>
            <h2>And I'm a Frontend Developer</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione fugiat nesciunt accusamus autem repellendus.</p>

            <button>Read More</button>
        </div>


        <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1773240306707-2a07fc569fde?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
        />
      </div>
    </div>
  )
}

export default Hero
