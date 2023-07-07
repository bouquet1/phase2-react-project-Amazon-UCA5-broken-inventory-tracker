import React, { useState } from 'react'

function AddRecipeForm({displayNewRecipe}) {
const [formData, setFormData] = useState({
    recipeName: "",
    totalPrepTime: "",
    directions1: "",
    directions2: "",
    ingredients: "",
    image: "https://www.forexfactory.com/attachment/image/1920501?d=1462368520",
    nutritionFacts: "",
})


//onChange add the new data to the current array/ nondestructive
function handleChange (e) {
    setFormData({...formData, [e.target.name]: e.target.value})
}

//handle submit and POST the new recipe
function handleSubmit (e) {
    e.preventDefault();
    //console.log("Submitted Data: ", formData)
    
//convert ingredients data to an array
// const revisedFormData = {
//     recipeName: "",
//     totalPrepTime: "",
//     directions1: "",
//     directions2: "",
//     ingredients: "",
//     image: "https://www.forexfactory.com/attachment/image/1920501?d=1462368520",
//     nutritionFacts: "",
// }

    fetch("http://localhost:3000/breakfastRecipes", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(formData)
    })
     .then(r => r.json())
     .then(newRecipeData => {console.log("New Recipe Data: ", newRecipeData)
    //displays with callback 
    displayNewRecipe(newRecipeData); 
    })
}   
  return (
    <>
    {/* <button>Add a New Recipe</button> */}
    <section className='new-recipe'>
      <h3>New Recipe</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input type="text" 
          name="recipeName" 
          value={formData.recipeName} 
          onChange={handleChange} />
        </label>
        <label>
          Total Prep Time:
          <input type="text" 
          name="totalPrepTime" 
          value={formData.totalPrepTime} 
          onChange={handleChange} />
        </label>
        <label>
          Directions:
          <input type="text" 
          name="directions1" 
          value={formData.directions1} 
          onChange={handleChange} />
        </label>
        <label>
          Directions 2:
          <input type="text" 
          name="directions2" 
          value={formData.directions2} 
          onChange={handleChange} />
        </label>
        <label>
          Ingredients:
          <input type="text" 
          name="ingredients" 
          value={formData.ingredients} 
          onChange={handleChange} />
        </label>
        <label>
          Add an Image:
          <input type="text" 
          name="image" 
          value={formData.image} 
          onChange={handleChange} />
        </label>
        <label>
          Nutrition Facts:
          <input type="text" 
          name="nutritionFacts" 
          value={formData.nutritionFacts} 
          onChange={handleChange} />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </section>
    </>
  )
}

export default AddRecipeForm;

