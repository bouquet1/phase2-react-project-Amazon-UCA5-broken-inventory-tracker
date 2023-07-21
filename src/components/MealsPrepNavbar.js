import React from 'react';
//deneme nested navbar
import { NavLink } from 'react-router-dom';

function MealsPrepNavbar() {
  return (
    //deneme nested navbar
    <div className='time-of-meal'>
      <button><NavLink className="navbar" to="/breakfastRecipes">Breakfast Recipes</NavLink></button>
      <button><NavLink className="navbar" to="/lunchRecipes">Lunch Recipes</NavLink></button>
      <button><NavLink className="navbar" to="/dinnerRecipes">Dinner Recipes</NavLink></button>
    </div>
  )
}

export default MealsPrepNavbar

