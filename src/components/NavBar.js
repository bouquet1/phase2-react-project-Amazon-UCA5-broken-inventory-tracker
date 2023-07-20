import React from 'react'
import logo from '../logo.png'


function NavBar({onChangePage}) {
  return (
    <nav  className='navbardiv'>
      <img className='logo' src={logo} alt="logo"/>
      <h1 className='logo-side'>UR Meal Prep Assistant</h1>
      {/* sets the button to toggle between components */}
      <ul>
        <li><button onClick={() => onChangePage("PrepList")}>Meal Prep List</button></li>
        <li><button onClick={() => onChangePage("ShoppingList")}>Shopping List</button></li>
      </ul>
    </nav>
  )
}

export default NavBar;