import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between p-2 bg-gray-300'>
      {/* Logo */}
      <div>
        <img className='h-15 w-15 rounded-full' src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
      </div>

      {/* Nav */}
      <div className='flex gap-3 pt-3 text-xl'>
        <NavLink to='/'>Home</NavLink> |
        <NavLink to='/about'>About</NavLink>|
        <NavLink to='/services'>Services</NavLink> |
        <NavLink to='/contact'>Contact</NavLink> |
      </div>

      {/* Register/login */}
      <div>
        <button className='gap-3 pt-3 text-xl bg-blue-400 p-3 rounded-full'>Login/Register</button>
      </div>
    </div>
  )
}

export default Header
