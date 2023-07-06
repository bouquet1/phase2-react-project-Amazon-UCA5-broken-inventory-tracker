import React from 'react'
import BreakfastRecipes from './BreakfastRecipes';
import AddRecipeForm from './AddRecipeForm';


function MealPrepList({breakfast}) {
//console.log(breakfasts)

const breakfastRecipesMap = breakfast.map(breakfastRecipe => <BreakfastRecipes key={breakfastRecipe.id} breakfastRecipe={breakfastRecipe} />)

  return (
    <div>
      <h2>Meal Prep List</h2>
      <AddRecipeForm />
      <ul>
        {/* displays recipes after fetch */}
         <h3>Breakfast Recipes</h3>
        {breakfastRecipesMap}
      </ul>
    </div>
  )
}

export default MealPrepList
