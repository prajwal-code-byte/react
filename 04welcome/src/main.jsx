import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './welcome.jsx'
import WelcomeClass from '../../example/src/WelcomeClass.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Welcome />
    <WelcomeClass/>
  </StrictMode>,
)
