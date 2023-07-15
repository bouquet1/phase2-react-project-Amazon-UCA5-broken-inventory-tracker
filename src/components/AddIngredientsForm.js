import React from 'react';
import { useState } from 'react';

function AddIngredientsForm() {
const [ingredients, setIngredients] = useState("")
const [ingredientsList, setIngredientsList] = useState([])

function handleChange(e){
    e.preventDefault()
    setIngredients(e.target.value)
}
console.log("I track input: ", ingredients, "I track inglist: ", ingredientsList)

function handleIngredientsList(){
    //ingList is the list of all ingredients array of strings
    //ingredient are the each strings in the array of ingList
    //when user submit an ing, it should be stored inside ingList 
    setIngredientsList(ingredients)
}

function handleSubmit(e){
    e.preventDefault()
}

  return (
    <section>
    <h3>Ingredients</h3>
    <p>Add the ingredient and the measurement separated by comma such as: <br/> "Butter, 2 tbsp" <br/> Please add one ingredient at a time.</p>
    <form onSubmit={handleSubmit}>
        <label>
          Ingredient:
          <input type="text" 
          name="ing1" 
          value={ingredients} 
          onChange={handleChange} />
        </label>
        <label className='submit_ingredient'>
          <input type="submit" 
          name="submit" 
          value="Add Ingredient"/>
        </label>
    </form>
    <button type="submit">Add Recipe</button>
    </section>
  )
}

export default AddIngredientsForm;