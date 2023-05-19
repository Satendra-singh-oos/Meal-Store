import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-heading'>
        <h1>Meals <span>Store</span></h1>

      </div>

      <div className='navbar-links'></div>
         <ul className='navbar-items'>
          
          <Link to="/"> <li>Home</li> </Link>
          <Link to="/categories" > <li>Categories</li> </Link>
          <Link to="/random-meal"> <li>Random</li> </Link>
        
         </ul>
    </div>
  )
}

export default Navbar