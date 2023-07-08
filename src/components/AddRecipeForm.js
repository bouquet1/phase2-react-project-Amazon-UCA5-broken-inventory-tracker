import React, { useState } from 'react'

function AddRecipeForm({displayNewRecipe, toggleForm}) {
const [formData, setFormData] = useState({
    recipeName: "",
    totalPrepTime: "",
    directions1: "",
    directions2: "",
    ing1: "", 
    ing2: "", 
    ing3: "", 
    ing4: "", 
    ing5: "", 
    ing6: "", 
    ing7: "", 
    ing8: "", 
    ing9: "", 
    ing10: "",
    image: "",
    nutritionFacts: "",
})

//onChange add the new data to the current array/ nondestructive
function handleChange (e) {
    setFormData({...formData, [e.target.name]: e.target.value, ingredients: [formData.ing1, formData.ing2, formData.ing3, formData.ing4, formData.ing5, formData.ing6, formData.ing7, formData.ing8, formData.ing9, formData.ing10]
    })}

//handle submit and POST the new recipe
function handleSubmit (e) {
    e.preventDefault();
    //console.log("Submitted Data: ", formData)
    


    let newFormData = {...formData}

    if(formData.image === ""){
      newFormData = {...formData, image: "https://www.forexfactory.com/attachment/image/1920501?d=1462368520"}
    }
  

    // fetch("http://localhost:3000/breakfastRecipes", {
    //     method: "POST",
    //     headers: { 
    //         "Content-Type": "application/json" 
    //     },
    //     body: JSON.stringify(newFormData)
    // })
    //  .then(r => r.json())
    //  .then(newRecipeData => {console.log("New Recipe Data: ", newRecipeData)
    // //displays with callback 
    // displayNewRecipe(newRecipeData); 
    // //hide the form again by firing toggle after Post
    // toggleForm()
   // }
    //)
}   
  return (
    <>
    {/* <button>Add a New Recipe</button> */}
    <section className='new-recipe'>
      <h3>New Recipe</h3>
      <form  className="formboxes" onSubmit={handleSubmit}>
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
          Ingredient1:
          <input type="text" 
          name="ing1" 
          value={formData.ing1} 
          onChange={handleChange} />
        </label>
        <label>
          Ingredient2:
          <input type="text" 
          name="ing2" 
          value={formData.ing2} 
          onChange={handleChange} />
        </label>
        <label>
          Ingredient 3:
          <input type="text" 
          name="ing3" 
          value={formData.ing3} 
          onChange={handleChange} />
        </label>
        <label>
          Ingredient 4:
          <input type="text" name="ing4" value={formData.ing4} onChange={handleChange} />
        </label>
        <label>
          Ingredient 5:
          <input type="text" name="ing5" value={formData.ing5} onChange={handleChange} />
        </label>
        <label>
          Ingredient 6:
          <input type="text" name="ing6" value={formData.ing6} onChange={handleChange} />
        </label>
        <label>
          Ingredient 7:
          <input type="text" name="ing7" value={formData.ing7} onChange={handleChange} />
        </label>
        <label>
          Ingredient 8:
          <input type="text" name="ing8" value={formData.ing8} onChange={handleChange} />
        </label>
        <label>
          Ingredient 9:
          <input type="text" name="ing9" value={formData.ing9} onChange={handleChange} />
        </label>
        <label>
          Ingredient 10:
          <input type="text" name="ing10" value={formData.ing10} onChange={handleChange} />
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

