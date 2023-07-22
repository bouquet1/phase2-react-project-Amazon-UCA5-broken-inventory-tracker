import React, { useState } from 'react'
import BreakfastRecipes from './BreakfastRecipes';
import MealsPrepNavbar from './MealsPrepNavbar';
import { Route, Switch } from 'react-router-dom';
import LunchRecipes from './LunchRecipes';
import DinnerRecipes from './DinnerRecipes';


function MealPrepList({breakfastRecipes, setBreakfastRecipes}) {



//display POST data, new rrecipe to DOM
function displayNewRecipe (newRecipe) {
  setBreakfastRecipes([...breakfastRecipes, newRecipe])
}


  return (
    <section>
      <MealsPrepNavbar />
      <Switch>
        <Route path="/breakfastRecipes">
          <BreakfastRecipes breakfastRecipes={breakfastRecipes} setBreakfastRecipes={setBreakfastRecipes} displayNewRecipe={displayNewRecipe} />
        </Route>
        <Route path="/lunchRecipes">
          <LunchRecipes />
        </Route>
        <Route path="/dinnerRecipes">
          <DinnerRecipes />
        </Route>
      </Switch>
    </section>
  )
}

export default MealPrepList
