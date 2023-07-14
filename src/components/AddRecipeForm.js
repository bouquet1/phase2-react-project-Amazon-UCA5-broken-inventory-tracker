import React, { useState } from 'react'
import AddIngredientsForm from './AddIngredientsForm';

//separate ingredients into a new form
//display the input at DOM b4 working on POST
//revise state variable
// end with having two forms. 1 for ingredients and 1 for the rest
  //INGREDIENTs FORM
  //1 input area, ingredient in => display on Dom => clean input area => new input => display on Dom => clean input area => new input 


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
    toggleForm()
   }
    )
}  
  return (
    <>
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
      <AddIngredientsForm />
    </section>
    </>
  )
}

export default AddRecipeForm;

