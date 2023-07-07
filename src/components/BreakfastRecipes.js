import React from 'react';


function BreakfastRecipes({breakfastRecipes}) {
// const {id, recipeName, totalPrepTime, directions1, directions2, ingredients, image, nutritionFacts } = breakfastRecipes;

const breakfastRecipesMap = breakfastRecipes.map((breakfastRecipe, index) => {
  const ingredientList = breakfastRecipe.ingredients.map(ingredient => {
    return (<li key={breakfastRecipe}>{breakfastRecipe}</li>)
  });
  return <div key={index}>
    <h2>Recipe {breakfastRecipe.id}: {breakfastRecipe.recipeName}</h2>
    <h6>{breakfastRecipe.totalPrepTime}</h6>
    <img src={breakfastRecipe.image} alt="recipe" />
    <li>{breakfastRecipe.ingredients}</li>
    <p>{breakfastRecipe.directions1}</p>
    <p>{breakfastRecipe.directions2}</p>
    <p>{breakfastRecipe.nutritionFacts}</p>
    <button>Add to Meal Prep list</button>
    <button>Add Ingredients to Shopping List</button>
    <button>Delete Recipe</button>
  </div>
})

  return (
    <div>
      <h2>Meal Prep List</h2>
      {breakfastRecipesMap}
    </div>
  )
}

export default BreakfastRecipes;


  //before trying nested navbar
    /*<div>
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
    </div>*/
