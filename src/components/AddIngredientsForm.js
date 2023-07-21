import React from 'react';
import { useState } from 'react';

function AddIngredientsForm() {
const [ingredients, setIngredients] = useState("")
const [ingredientsList, setIngredientsList] = useState([])

function handleChange(e){
    setIngredients(e.target.value)
}
//console.log("I track input: ", ingredients)

function handleIngredientsList(e){
  e.preventDefault()
    //ingredients holds each strings in the array of ingredientsList
    /** BEFORE POST REQ.
        1. user will put an ingredient, click the 'add ingredient',and the ingredient will be displayed @ DOM, text area will be cleared 
        2. Add x button if the user typed wrong and want to type again
     */
  if (ingredients.trim() !== "") {
    setIngredientsList((currentList) => [...currentList, ingredients.trim()])
    setIngredients("")
    //console.log("I track inglist: ", ingredientsList)
    }
    
}
//render each ingredient inside ingredientsList 
const ingredientsListMap = ingredientsList.map((ingredient, index) => <li key={index}>{ingredient}</li>)

  return (
    <section>
    <h3>Ingredients</h3>
    <p>Please, add one ingredient at a time with the following format: <br/> Boneless chicken breast, 2lb <br /> butter, 2 Tbsp</p>
    <form onSubmit={handleIngredientsList}>
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
          value="Add Ingredient"/>
        </label>
    </form>
    <ul className='ingredients-container'>
      {ingredientsListMap}
    </ul>
    </section>
  )
}

export default AddIngredientsForm;