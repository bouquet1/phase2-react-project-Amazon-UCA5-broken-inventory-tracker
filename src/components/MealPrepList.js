import React, { useState } from 'react'
import MealsPrepNavbar from './MealsPrepNavbar';
import BreakfastRecipes from './BreakfastRecipes';
import LunchRecipes from './LunchRecipes';
import DinnerRecipes from './DinnerRecipes';
import { Switch, Route } from 'react-router-dom'


function MealPrepList() {
const [meal, setMeal] = useState("breakfast")

  return (
    <div>
      <MealsPrepNavbar onChange={setMeal} />
      <Switch>
        <Route path="/breakfastRecipes">
          <BreakfastRecipes />
        </Route>
        <Route path="/lunchRecipes">
          <LunchRecipes />
        </Route>
        <Route path="/dinnerRecipes">
          <DinnerRecipes />
        </Route>
      </Switch>
        <h1 className='mealPrep'>Meal Prep List</h1>
        {/* <MealsPrepNavbar onchangeMeal={setMeal}/> */}
        {/* {<div>
        <MealsPrepNavbar onchangeMeal={setToggleMeal} />
        {changeBetweenMeals}
        </div>
        <ul>{breakfastRecipesMap}</ul>} */}
        {/* <ul>{lunchRecipesMap}</ul>
        <ul>{dinnerRecipesMap}</ul>  */}
    </div>
  )
}

export default MealPrepList;
