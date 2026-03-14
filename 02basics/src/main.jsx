import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Self from './Self.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
    <Self />
  </StrictMode>,
)
