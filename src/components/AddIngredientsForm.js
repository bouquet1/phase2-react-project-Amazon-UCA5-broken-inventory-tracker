import React from 'react';
import { useState } from 'react';

function AddIngredientsForm() {
const [ingredients, setIngredients] = useState("")
const [ingredientsList, setIngredientsList] = useState([])

function handleChange(e){
    setIngredients(e.target.value)
}
console.log("I track input: ", ingredients)

function handleIngredientsList(e){
  e.preventDefault()
    //ingredients holds each strings in the array of ingredientsList
    /**
        1. user will put an ingredient and measurement
        2. user will click the 'add ingredient' 
        3. the ingredient will be displayed under the form and the text area will be cleared for another entry
        4. Inside 'ingredients-container' next to the first ingredient there will be an x button if the user typed wrong and want to type again
        5. user will enter the second ingredient, it will be displayed in 'ingredients-container', text area will be cleared for  a new entry and it will go on like that until the user finished adding ingredients 
        6. when user clicked Add Recipe button the list of ingredients (array of strings) will be stored in state variable ingredientsList and sent (POST request) to the database.
     */
  if (ingredients.trim() !== "") {
    setIngredientsList((currentList) => [...currentList, ingredients.trim()])
    setIngredients("")
    console.log("I track inglist: ", ingredientsList)
    }
    
}
//render each ingredient inside ingredientsList and display @ JSX ul
const ingredientsListMap = ingredientsList.map((ingredient, index) => <li key={index}>{ingredient}</li>)

  return (
    <section>
    <h3>Ingredients</h3>
    <p>Add one ingredient at a time, please. </p>
    <p>Add the ingredient and the measurement separated by comma, such as: <br/>Boneless chicken breast, 2lb <br/>Butter, 2 Tbsp</p>
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
    <button className='submit-new-recipe' type="submit">Add Recipe</button>
    </section>
  )
}

export default AddIngredientsForm;