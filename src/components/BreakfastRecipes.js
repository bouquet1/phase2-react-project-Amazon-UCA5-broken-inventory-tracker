import React from 'react'

function BreakfastRecipes({breakfastRecipe}) {
const {id, recipeName, totalPrepTime, directions1, directions2, ingredients, image, nutritionFacts } = breakfastRecipe;


  return (
    <div>
      {/* <h3>Breakfast Recipes</h3> */}
      <h4>Recipe {id}: {recipeName} </h4>
      <h6>{totalPrepTime}</h6>
      <img src={image} alt="recipe" />
      <li>{ingredients}</li>
      <p>{directions1}</p>
      <p>{directions2}</p>
      <p>{nutritionFacts}</p>
      <button>Add to Meal Prep list</button>
      <button>Add Ingredients to Shopping List</button>
      <button>Delete Recipe</button>
    </div>
  )
}

export default BreakfastRecipes;