import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import { useState } from 'react';


function BreakfastRecipes({breakfastRecipes, displayNewRecipe}) {
const [showForm, setShowForm] = useState(false);

const breakfastRecipesMap = breakfastRecipes.map((breakfastRecipe, index) => {
  const ingredientList = breakfastRecipe.ingredients.map(ingredient => {
    return (<li key={ingredient}>{ingredient}</li>)
  });
  return <div key={index}>
    <h3>Recipe {breakfastRecipe.id}: {breakfastRecipe.recipeName}</h3>
    <h5>Prep Time: {breakfastRecipe.totalPrepTime}</h5>
    <img src={breakfastRecipe.image} alt="recipe" />
    <p className='subtitles'>Ingredients:</p>
    <ul> {ingredientList}</ul>
    <p className='subtitles'>Directions:</p>
    <p>{breakfastRecipe.directions1}</p>
    <p>{breakfastRecipe.directions2}</p>
    <p className='subtitles'>Nutrition Facts:</p>
    <p>{breakfastRecipe.nutritionFacts}</p>
    <button>Add to Meal Prep list</button>
    <button>Add Ingredients to Shopping List</button>
    <button>Update Recipe</button>
    <button>Delete Recipe</button>
  </div>
})

function toggleForm(){
  setShowForm(showForm => !showForm)
}

  return (
    <>
    <h2>Breakfast Recipes</h2>
    <div className='formArea'>
      <button onClick={toggleForm} >Add a New Recipe</button>
      {showForm && <AddRecipeForm displayNewRecipe={displayNewRecipe} toggleForm={toggleForm} />}
      {breakfastRecipesMap}
    </div>
    </>
  )
}

export default BreakfastRecipes;

