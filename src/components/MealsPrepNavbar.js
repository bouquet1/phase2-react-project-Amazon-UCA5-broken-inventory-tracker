import React from 'react'

function MealsPrepNavbar({onchangeMeal}) {
  return (
    <>
    <h3>Choose a Meal</h3>
      <section>{/* sets the breakfast/lunch/dinner buttons*/}
        <button onClick={() => onchangeMeal("breakfast")}>Breakfast Recipes</button>
        <button onClick={() => onchangeMeal("lunch")}>Lunch Recipes</button>
        <button onClick={() => onchangeMeal("dinner")}>Dinner Recipes</button>
      </section>
    </>
  )
}

export default MealsPrepNavbar;