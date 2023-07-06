import React, { useState } from 'react'

function AddRecipeForm() {
const [formData, setFormData] = useState({
    name: "",
    totalPrepTime: "",
    directions1: "",
    directions2: "",
    ingredients: "",
    image: "",
    nutritionFacts: "",
})


function handleChange (e) {
    setFormData({...formData, [e.target.name]: e.target.value})
}

function handleSubmit (e) {
    e.preventDefault();
    console.log(formData)
}

  return (
    <div>
    <button>Add a New Recipe</button>
    <section>
      {/* <h4>New Recipe</h4> */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Total Prep Time:
          <input type="text" name="totalPrepTime" value={formData.totalPrepTime} onChange={handleChange} />
        </label>
        <label>
          Directions:
          <input type="text" name="directions1" value={formData.directions1} onChange={handleChange} />
        </label>
        <label>
          Directions 2:
          <input type="text" name="directions2" value={formData.directions2} onChange={handleChange} />
        </label>
        <label>
          Ingredients:
          <input type="text" name="ingredients" value={formData.ingredients} onChange={handleChange} />
        </label>
        <label>
          Add an Image:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <label>
          Nutrition Facts:
          <input type="text" name="nutritionFacts" value={formData.nutritionFacts} onChange={handleChange} />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </section>
    </div>
  )
}

export default AddRecipeForm;