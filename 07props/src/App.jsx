import Card from './components/Card'

function App(){
  return (
    <div className='parent'>
      <Card name= "Arun"  age = {18} image = "https://images.unsplash.com/photo-1769583662086-9d1021c752e4?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name = "Bobby" age = {20} image = "https://images.unsplash.com/photo-1770131091438-c5c4b89ea264?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>

  )
}

export default App