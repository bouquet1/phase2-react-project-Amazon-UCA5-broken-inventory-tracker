import React from 'react';
import { useState } from 'react';

function AddIngredientsForm({updateIngredientsList}) {
const [ingredients, setIngredients] = useState("")
const [ingredientsList, setIngredientsList] = useState([])

function handleChange(e){
    setIngredients(e.target.value)
}

function handleIngredientsList(e){
  e.preventDefault()
    /** BEFORE POST req user adds ingredients to display @ DOM. Add x button if the user typed wrong and want to type again. POST after user see all the ingredients and happy with it.
     */
  if (ingredients.trim() !== "") {
    setIngredientsList((currentList) => [...currentList, ingredients.trim()])
    setIngredients("") //clears the input field for next ingredient
    // Calls the updateIngredientsList to update the parent's state
    updateIngredientsList([...ingredientsList, ingredients.trim()]);
    }
    
}



//render each ingredient inside ingredientsList 
const ingredientsListMap = ingredientsList.map((ingredient, index) => <li key={index}>{ingredient}</li>)

  return (
    <section>
    <h3>Ingredients</h3>
    <p>Please, add one ingredient at a time with the following format: <br/> Boneless chicken breast, 2lb <br /> butter, 2 Tbsp</p>
    {/* <form onSubmit={handleIngredientsList}> */}
        <label>
          Ingredient:
          <input type="text" 
          name="ingredients" 
          value={ingredients} 
          placeholder="Ingredient, Measurement"
          onChange={handleChange} />
        </label>
        <label className='submit_ingredient'>
          <input type="submit" 
          name="submit" 
          value="Add Ingredient"
          onClick={handleIngredientsList} />
        </label>
    {/* </form> */}
    <ul className='ingredients-container'>
      {ingredientsListMap}
    </ul>
    </section>
  )
}

export default AddIngredientsForm;

