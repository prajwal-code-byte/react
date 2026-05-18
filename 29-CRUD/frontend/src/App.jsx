import React, { useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

  const [students, setStudents] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [editId, setEditId] = useState(null)

  // GET Students
  const getStudents = async () => {
    try {
      const response = await axios.get( 'http://localhost:3000/students')
      setStudents(response.data)
    }
    catch(error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getStudents()}, [])

  // ADD Student
  const addStudent = async () => {

    try {

      await axios.post(

        'http://localhost:3000/students',

        {
          name,
          email
        }

      )

      getStudents()

      setName('')

      setEmail('')

    }

    catch(error) {

      console.log(error)

    }

  }

  // DELETE Student
  const deleteStudent = async (id) => {

    try {

      await axios.delete(
        `http://localhost:3000/students/${id}`
      )

      getStudents()

    }

    catch(error) {

      console.log(error)

    }

  }

  // EDIT Student
  const editStudent = (student) => {

    setName(student.name)

    setEmail(student.email)

    setEditId(student._id) //null -> false value , value -> Truth

  }

  // UPDATE Student
  const updateStudent = async () => {

    try {

      await axios.put(

        `http://localhost:3000/students/${editId}`,

        {
          name,
          email
        }

      )

      getStudents()

      setName('')

      setEmail('')

      setEditId(null)

    }

    catch(error) {

      console.log(error)

    }

  }

  return (

    <div style={{ padding: '20px' }}>

      <h1>Student CRUD App</h1>

      <input
        type='text'
        placeholder='Enter Name'
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      {
        editId ? (

          <button onClick={updateStudent}>
            Update Student
          </button>

        ) : 
        (

          <button onClick={addStudent}>
            Add Student
          </button>

        )
      }

      <hr />

      {
        students.map((student) => (

          <div key={student._id}>

            <h3>{student.name}</h3>

            <p>{student.email}</p>

            <button
              onClick={() =>
                editStudent(student)
              }
            >
              Edit
            </button>

            {" "}

            <button
              onClick={() =>
                deleteStudent(student._id)
              }
            >
              Delete
            </button>

            <hr />

          </div>

        ))
      }

    </div>

  )
}

export default App