import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")

  // Array to store all feedbacks
  const [allFeedbacks, setAllFeedbacks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newFeedback = {
      name,
      email,
      feedback
    }

    // Save data into array
    setAllFeedbacks([...allFeedbacks, newFeedback])

    // Clear form
    setName("")
    setEmail("")
    setFeedback("")
  }

  return (
    <div>

      <h1>Online Feedback Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Enter Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <br /><br />

        <button type="submit">Submit</button>

      </form>

      <hr />

      <h2>Submitted Feedbacks</h2>

      {
        allFeedbacks.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Feedback: {item.feedback}</p>
            <hr />
          </div>
        ))
      }

    </div>
  )
}

export default App