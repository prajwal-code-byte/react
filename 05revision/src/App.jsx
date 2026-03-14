// import Hello from './components/hello'
// import Student from './components/student'

import Names from "./components/name" // automatically imported

const App = () => {
  return (
  <>
    <h1>Props Example</h1>

    <Names name = 'Adam' marks = {55}/>
    <Names name = 'Eve' marks = {65}/>
    <Names name = 'Bob' marks = {75}/>




  </>
  )
}
export default App

// function App(){

// }