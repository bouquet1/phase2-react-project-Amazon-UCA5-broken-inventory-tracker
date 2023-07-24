import React from 'react'
import {useState} from 'react';

function RecipeDetails({recipe, handleEditRecipe}) {
  const [editedRecipe, setEditedRecipe] = useState(recipe);


  //save changes for PATCH req
  function patchSavedChanges(){
    //patch  request goes in here
    fetch(`http://localhost:3000/breakfast/${recipe.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(editedRecipe),
    })
      .then(r => r.json())
      .then(console.log(editedRecipe))
    //callback, handleEditRecipe is to update parent's state with the edited recipe
    handleEditRecipe(editedRecipe);
  }


  return (
    <section>
        <h2>EDIT YOUR RECIPE</h2>
        <form>
          <label>
          Recipe Name:
          <input type="text" 
          name="name" 
          value={editedRecipe.name}
          onChange={(e) => setEditedRecipe({ ...editedRecipe, name: e.target.value })}
          />
          </label>
          <label>
          Total Prep Time:
          <input type="text" 
          name="totalPrepTime"
          value={editedRecipe.totalPrepTime} 
          onChange={(e) => setEditedRecipe({ ...editedRecipe, totalPrepTime: e.target.value })}
          />
          </label>
          <label>
          Directions1:
          <input type="text" 
          name="directions1" 
          value={editedRecipe.directions1}
          onChange={(e) => setEditedRecipe({ ...editedRecipe, directions1: e.target.value })}
          />
          </label>
          <label>
          Directions 2:
          <input type="text" 
          name="directions2"
          value={editedRecipe.directions2}
          onChange={(e) => setEditedRecipe({ ...editedRecipe, directions2: e.target.value })}
          />
          </label>
          <label>
          Add an Image:
          <input type="text" 
          name="image" 
          value={editedRecipe.image}
          onChange={(e) => setEditedRecipe({ ...editedRecipe, image: e.target.value })}
          />
        </label>
          <label>
          Nutrition Facts:
          <input type="text" 
          name="nutritionFacts" 
          value={editedRecipe.nutritionFacts}
          onChange={(e) => setEditedRecipe({ ...editedRecipe, nutritionFacts: e.target.value })}
          />
        </label>
        <button onClick={patchSavedChanges} >Save Changes</button>
        </form>
    </section>
  )
}

export default RecipeDetails

