import React, { useState } from 'react'
import AddIngredientsForm from './AddIngredientsForm';

//separate ingredients into a new form
//display the input at DOM b4 working on POST
//revise state variable

function AddRecipeForm({displayNewRecipe, toggleForm}) {
const [formData, setFormData] = useState({
    recipeName: "",
    totalPrepTime: "",
    directions1: "",
    directions2: "",
    ingredients: [],
    image:"",
    nutritionFacts: ""
})

//onChange add the new data to the current array/ nondestructive
function handleChange (e) {
    setFormData({...formData, [e.target.name]: e.target.value})}

//handle submit and POST the new recipe
function handleSubmit (e) {
    e.preventDefault();
    console.log("Submitted Data: ", formData)

    let newFormData = {...formData}

    if(formData.image === ""){
      newFormData = {...formData, image: "https://www.forexfactory.com/attachment/image/1920501?d=1462368520"}
    }
  
    fetch("http://localhost:3000/breakfast", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(newFormData)
    })
     .then(r => r.json())
     .then(newRecipeData => {console.log("New Recipe Data: ", newRecipeData)
    //displays with callback 
    displayNewRecipe(newRecipeData); 
    //hide the form again by firing toggle after Post
    //toggleForm()
   }
    )
  
}  
  return (
    <section className='new-recipe'>
      <div className="form-container">
      <h3>Recipe Details</h3>
      <p>Please enter the details of your new recipe!</p>
      <form  className="formboxes" onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input type="text" 
          name="recipeName" 
          value={formData.recipeName} 
          placeholder="Enter a name"
          onChange={handleChange} />
        </label>
        <label>
          Total Prep Time:
          <input type="text" 
          name="totalPrepTime" 
          value={formData.totalPrepTime} 
          placeholder="e.g 15 min"
          onChange={handleChange} />
        </label>
        <label>
          Directions1:
          <input type="text" 
          name="directions1" 
          value={formData.directions1} 
          placeholder="directions"
          onChange={handleChange} />
        </label>
        <label>
          Directions 2:
          <input type="text" 
          name="directions2" 
          value={formData.directions2} 
          placeholder="more directions"
          onChange={handleChange} />
        </label>
        <label>
          Add an Image:
          <input type="text" 
          name="image" 
          value={formData.image} 
          placeholder="take a good pic"
          onChange={handleChange} />
        </label>
        <label>
          Nutrition Facts:
          <input type="text" 
          name="nutritionFacts" 
          value={formData.nutritionFacts} 
          placeholder="nutrition facts"
          onChange={handleChange} />
        </label>
        <button className='submit-new-recipe' type="submit" onSubmit={handleSubmit} >Add Recipe</button>
      </form>
      <AddIngredientsForm />
      <p>Done? <br/> Save it to your recipe list simply clicking the add button below.</p>
    </div>
    </section>
  )
}

export default AddRecipeForm;

