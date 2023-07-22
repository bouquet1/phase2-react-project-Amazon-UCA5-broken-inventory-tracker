# phase2-react-project-meal-prep-frontend

Meal Prep Asistant Frontend Repo: https://github.com/bouquet1/phase2-react-project-meal-prep-frontend

To start using React Router, we need to install react-router-dom:

```
$ npm install
$ npm install react-router-dom@5
$ npm start

```

Note: make sure to include @5 at the end of the install command to install React Router version 5 instead of version 6.

---

phase2-react-project-meal-planner-assistant
Meal Prep Asistant Backend Repo: https://github.com/bouquet1/phase2-react-project-meal-prep-backend

Running the Server Locally
To run your server in development mode, run:

npm run dev
While running in development mode, the server will re-load any time you make changes to the db.json file, so you can test our your seed data.

While your server is running, you can make requests to http://localhost:3000. Check it out in the browser to make sure your server works!

---

npm install react-router-dom

---

handle the GET recipes - useState recipes to fetch the recipes

to meet the deadline I did MVP and I will continue to built my app and make it fucntional, aesthetic, and ready before graduation hoping to impress my new employee.

placeholder image:
https://www.forexfactory.com/thread/536931-need4speed-scalping?page=39

https://www.forexfactory.com/attachment/image/1920501?d=1462368520

Easy Recipes with 5 Ingredients or Less

I created my own json file which I emjoy doing it a lot

    I separeted AddIngredientsForm to have a clean data for ingredients recipe and avoid having many input boxes for this purpose. I also wanted user to see as a list below the input to easier manipulation. I wanna do it for the AddFormREcipe later.

I copied the file to work on PATCH separately. I need to update review accordingly.

    1. RecipeDetails component as a child of AddRecipeForm will allow me to display the recipe details in a non-edit mode initially, and then switch to an edit mode when the user clicks the "Edit Recipe" button. This way, I can provide a seamless user experience for updating the recipe details.

    2. I need to activate update recipe button. How can I manipulate it in RecipeDetails? Callback from child to parent? I created selectedRecipe state variable to track which recipe the user wants to edit. then I wrote handleEditRecipe function and use it with onClick that with Edit Recipe button.

    3.passed down the state, state setter and the handleEditRecipe function to addRecipe form.

    4. I need to create controlled form in RecipeDetails so this component can deal with only editing the recipe.

    5.It was challenging to figure out where and how to locate Recipe DEtails. When I import <RecipeDetails /> inside AddRecipe From it is located inside AddRecipe form which is a separate component just to be visible when Add Recipe button is clicked. So, I can't have <RecipeDetails /> inside AddRecipeForm as a child component.

    When I added it inside Breakfast Recipes, I'm Recipe Details Component title is located at the end of all the single recipes that is rendered to display.

    How can I implement <RecipeDEtails> in breakfast recipes so it can be under each single recipe when update recipe button is clicked? OK. I have added this code insoide rendering each recipe to dsiplay.

    {/* Conditionally renders RecipeDetails under the selected recipe.Checks if the selectedRecipe state variable exists and if its id matches the id of the current breakfastRecipe. If true, the RecipeDetails comp will be rendered under the selected recipe */}
    {selectedRecipe && selectedRecipe.id === breakfastRecipe.id && ( <RecipeDetails recipe={selectedRecipe} handleEditRecipe={handleEditRecipe} />)}

    to test when I click Edit Recipe button I see title I'm Recipe Details Component under each recipe and also console logs the recipe obj and says I'm  selected for editing. Such an esciting moment!!!
    Omg, it worked and this feels so good!!!!
