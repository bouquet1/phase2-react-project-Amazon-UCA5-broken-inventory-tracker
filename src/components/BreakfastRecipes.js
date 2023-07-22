import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import { useState } from 'react';


function BreakfastRecipes({breakfastRecipes, setBreakfastRecipes, displayNewRecipe}) {
const [showForm, setShowForm] = useState(false);


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
    <button>Update Recipe</button>
    <button onClick={() => handleDelete(breakfastRecipe.id)}>Delete Recipe</button>
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

