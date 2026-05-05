import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/about">About</Link> | {' '}
        <Link to="/contact">Contact</Link> | {' '}
      </nav>

      
    </div>
  )
}

export default Navbar
