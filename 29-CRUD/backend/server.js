// server.js

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// Middleware
app.use(cors())

app.use(express.json())

// MongoDB Connection
mongoose.connect(
  'mongodb://127.0.0.1:27017/studentDB'
)
.then(() => {
  console.log('MongoDB Connected')
})
.catch((error) => {
  console.log(error)
})

// Schema
const StudentSchema = new mongoose.Schema({
  name: String,
  email: String
})

// Model
const Student = mongoose.model(
  'Student',
  StudentSchema
)

// GET Students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find()
    res.json(students)
  }
  catch(error) {
    console.log(error)
  }
})

// ADD Student
app.post('/students', async (req, res) => {
  try {
    const newStudent = new Student({
    name: req.body.name,
    email: req.body.email
    })

    const savedStudent = await newStudent.save()
    res.json(savedStudent)
  }

  catch(error) {
    console.log(error)}
})

// UPDATE Student
app.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          email: req.body.email
        },
        { new: true }
    )
    res.json(updatedStudent)
  }
  catch(error) {
    console.log(error)
  }
})

// DELETE Student
app.delete('/students/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(
      req.params.id
    )
    res.json({
      message: 'Student Deleted'
    })
  }
  catch(error) {
    console.log(error)
  }

})

// Home Route
app.get('/', (req, res) => {

  res.send('Backend Running')

})


// Server
app.listen(3000, () => {

  console.log(
    'Server Running on Port 3000'
  )

})