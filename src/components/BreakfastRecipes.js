import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import { useState } from 'react';
import RecipeDetails from './RecipeDetails'


function BreakfastRecipes({breakfastRecipes, setBreakfastRecipes, displayNewRecipe}) {
const [showForm, setShowForm] = useState(false);
//keeps track of the recipe user wants to edit
const [selectedRecipe, setSelectedRecipe] = useState(null);

//DELETE fetch req 
function handleDelete(id){
  fetch(`http://localhost:3000/breakfast/${id}`, {
    method: "DELETE"
  })
  .then(r => r.json())
  .then((recipe) => {
    //updates the breakfastRecipes after delete
    setBreakfastRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
  })
  .catch(error => {console.log("Error deleting the recipe:", error);
});
}

//handles selecting a recipe for editing
function handleEditRecipe (recipe) {
  setSelectedRecipe(recipe);
  console.log("I'm selected for editing:", recipe);
}


//displays the details of a single recipe
const breakfastRecipesMap = breakfastRecipes.map((breakfastRecipe, index) => {
  //also maps ingredients list
  const ingredientList = breakfastRecipe.ingredients.map(ingredient => {
    return (<li key={ingredient}>{ingredient}</li>)
  });
  return <div key={index}>
    <h3>{breakfastRecipe.name}</h3>
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
    <button onClick={() => handleEditRecipe(breakfastRecipe)}>Edit Recipe</button>
    <button onClick={() => handleDelete(breakfastRecipe.id)}>Delete Recipe</button>
    {/* Conditionally renders RecipeDetails under the selected recipe.Checks if the selectedRecipe state variable exists and if its id matches the id of the current breakfastRecipe. If true, the RecipeDetails comp will be rendered under the selected recipe */}
    {selectedRecipe && selectedRecipe.id === breakfastRecipe.id && ( <RecipeDetails recipe={selectedRecipe} handleEditRecipe={handleEditRecipe} />)}
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

