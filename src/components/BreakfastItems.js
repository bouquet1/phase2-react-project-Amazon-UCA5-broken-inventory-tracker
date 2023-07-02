import React from 'react'

function BreakfastItems({breakfast}) {
    const {id, name, totalPrepTime, directions1, directions2, ingredients, image, nutritionFacts } = breakfast;

return (
<section>
    <h2>Breakfast Recipes</h2>
    <image src={image} alt={name} />
    <h3>{name}</h3>
    <h4>{totalPrepTime}</h4>
    <p>{directions1}</p>
    <p>{directions2}</p>
    <li>{ingredients}</li>
    <p>{nutritionFacts}</p>
</section>
)
}

export default BreakfastItems