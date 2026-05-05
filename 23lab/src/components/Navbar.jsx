import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const navStyle = ({isActive}) =>{
    return isActive ? 'text-orange-300' : 'text-white'
  }  


  return (
    <nav className='bg-blue-700 text-white flex justify-between p-2'>
        <h1 className='cursor-pointer' onClick={() => navigate('/')}>My App </h1>
        <div >

        <NavLink to='/' className={navStyle}>Home</NavLink> | {' '}
        <NavLink to='/about'  className={navStyle}>About</NavLink> | {' '}
        <NavLink to='/contact'  className={navStyle}>Contact</NavLink> | {' '}
        <NavLink to='/dashboard'  className={navStyle}>Dashboard</NavLink> | {' '}
        </div>

    </nav>
  )
}

export default Navbar
