import React from 'react'
import BreakfastItems from './BreakfastItems';


function MealPrepList({breakfasts, lunch, dinner}) {

const breakfastRecipesMap = breakfasts.map(breakfast => <BreakfastItems key={breakfast.id} breakfast={breakfast} />)
  
  return (
    <section>
        <h1>Meal Prep List</h1>
        <ul>{breakfastRecipesMap}</ul>
    </section>
  )
}

export default MealPrepList;