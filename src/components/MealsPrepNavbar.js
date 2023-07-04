import React from 'react';
import { NavLink } from "react-router-dom";


function MealsPrepNavbar() {
  return (
    <>
    <h4>Choose a Meal</h4>
      <section>{/* sets the breakfast/lunch/dinner buttons*/}
        <NavLink className="mealprepNavbar" to="/breakfastRecipes" >Breakfast Recipes</NavLink>
        <NavLink className="mealprepNavbar" to="/lunchRecipes">Lunch Recipes</NavLink>
        <NavLink className="mealprepNavbar" to="/dinnerRecipes">Dinner Recipes</NavLink>
      </section>
    </>
  )
}

export default MealsPrepNavbar;
