import React from 'react'
import { v4 as uuidv4} from 'uuid'

function BreakfastRecipes({breakfast}) {
    // destructure prop
    const {id, name, totalPrepTime, directions1, directions2, ingredients, image, nutritionFacts } = breakfast;

return (
<section>
    {/* <h2>Breakfast Recipes</h2> */}
    <image src={image} alt={name} />
    <h3>{name}</h3>
    <h4>{totalPrepTime}</h4>
    <p>{directions1}</p>
    <p>{directions2}</p>
    {/* map through ingredients array to list them */}
    <li>{ingredients.map(ingredient =>  (<li key={uuidv4()}>{ingredient}</li>))}</li>
    <p>{nutritionFacts}</p>
</section>
)
}

export default BreakfastRecipes;
