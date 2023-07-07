import React, { useState } from 'react'
import BreakfastRecipes from './BreakfastRecipes';
import AddRecipeForm from './AddRecipeForm';
import MealsPrepNavbar from './MealsPrepNavbar';
import { Route, Switch } from 'react-router-dom';
import LunchRecipes from './LunchRecipes';
import DinnerRecipes from './DinnerRecipes';


function MealPrepList({breakfastRecipes, setBreakfast}) {
//deneme nested NavBar
  const [meal, setMeal] = useState(["BreakfastRecipes"])


//display POST data, new rrecipe to DOM
function displayNewRecipe (newRecipe) {
  setBreakfast([...breakfastRecipes, newRecipe])
}


  return (
    <div>
      <h2>Meal Prep List</h2>
      <MealsPrepNavbar />
      <Switch>
        <Route path="/breakfastRecipes">
          <BreakfastRecipes breakfastRecipes={breakfastRecipes} displayNewRecipe={displayNewRecipe} />
        </Route>
        <Route path="/lunchRecipes">
          <LunchRecipes />
        </Route>
        <Route path="/dinnerRecipes">
          <DinnerRecipes />
        </Route>
      </Switch>
    </div>
  )
}

export default MealPrepList
