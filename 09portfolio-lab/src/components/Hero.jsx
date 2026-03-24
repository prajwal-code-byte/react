function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <p>Hi, Myself</p>

        <h1>Adam Smith</h1>

        <h2>
          And I'm a <span>Frontend Developer</span>
        </h2>

        <p>
          Passionate about creating beautiful, responsive websites
          and exceptional user experiences.
        </p>

        <button className="btn">Read More</button>

      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1773240306707-2a07fc569fde?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
        />
      </div>

    </section>
  )
}

export default Hero