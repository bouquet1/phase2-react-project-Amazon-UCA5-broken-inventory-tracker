import React, { useState } from 'react'
import MealsPrepNavbar from './MealsPrepNavbar';
import BreakfastRecipes from './BreakfastRecipes';
import LunchRecipes from './LunchRecipes';
import DinnerRecipes from './DinnerRecipes';


function MealPrepList({breakfasts, lunches, dinners}) {
const [toggleMeal, setToggleMeal] = useState("breakfast")

const breakfastRecipesMap = breakfasts.map(breakfast => <BreakfastRecipes key={breakfast.id} breakfast={breakfast} />)

const lunchRecipesMap = lunches.map(lunch => <LunchRecipes key={lunch.id} lunch={lunch} />)

const dinnerRecipesMap = dinners.map(dinner=> <DinnerRecipes key={dinner.id} dinner={dinner} />)


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
        <ul>{lunchRecipesMap}</ul>
        <ul>{dinnerRecipesMap}</ul>
    </section>
  )
}

export default MealPrepList;
