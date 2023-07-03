import React, { useState } from 'react'
import MealsPrepNavbar from './MealsPrepNavbar';
import BreakfastRecipes from './BreakfastRecipes';
import LunchRecipes from './LunchRecipes';
import DinnerRecipes from './DinnerRecipes';


function MealPrepList({breakfasts, lunch, dinner}) {

const breakfastRecipesMap = breakfasts.map(breakfast => <BreakfastRecipes key={breakfast.id} breakfast={breakfast} />)

const [toggleMeal, setToggleMeal] = useState("breakfast")

const changeBetweenMels = ()  =>{
  if (toggleMeal=== "breakfast"){
          return <BreakfastRecipes />
  } else if (toggleMeal === "lunch") {
          return <LunchRecipes />
  } else {
    return <DinnerRecipes />
  }

  }
  return (
    <section>
        <h1 className='mealPrep'>Meal Prep List</h1>
        <div>
        <MealsPrepNavbar onchangeMeal={setToggleMeal} />
        {changeBetweenMels}
        </div>
        <ul>{breakfastRecipesMap}</ul>
    </section>
  )
}

export default MealPrepList;
