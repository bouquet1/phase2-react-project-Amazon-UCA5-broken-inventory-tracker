import React from 'react'

function NavBar({onChange}) {
  return (
    <nav>
      <button onClick={() => onChange("PrepList")}>Meal Prep List</button>
      <button onClick={() => onChange("ShoppingList")}>Shopping List</button>
    </nav>
  )
}

export default NavBar;