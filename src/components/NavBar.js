import React from 'react'

function NavBar({onChangePage}) {
  return (
    <nav  className='navbardiv'>
      {/* sets the button to toggle between components */}
      <button onClick={() => onChangePage("PrepList")}>Meal Prep List</button>
      <button onClick={() => onChangePage("ShoppingList")}>Shopping List</button>
    </nav>
  )
}

export default NavBar;