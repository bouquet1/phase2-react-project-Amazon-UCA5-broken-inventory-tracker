import React from 'react'
import { v4 as uuidv4} from 'uuid'

function LunchRecipes({lunch}) {
const {id, name, totalPrepTime, directions1, directions2, ingredients, image, nutritionFacts } = lunch;

  return (
    <section>
        {/* <h2>Lunch Recipes</h2> */}
        <image src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{totalPrepTime}</h4>
        <p>{directions1}</p>
        <p>{directions2}</p>
        {/* map through ingredients array ti list them */}
        <li>{ingredients.map(ingredient =>  (<li key={uuidv4()}>{ingredient}</li>))}</li>
        <p>{nutritionFacts}</p>
</section>
  )
}

export default LunchRecipes

