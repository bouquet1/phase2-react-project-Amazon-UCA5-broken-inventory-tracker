import React from 'react'
import logo from '../logo.jpg';

function NavBar({onChangePage}) {
  return (
    <nav  className='navbardiv'>
      <img className='logo' src={logo} alt="logo"/>
      {/* sets the button to toggle between components */}
      <button onClick={() => onChangePage("PrepList")}>Meal Prep List</button>
      <button onClick={() => onChangePage("ShoppingList")}>Shopping List</button>
    </nav>
  )
}

export default NavBar;