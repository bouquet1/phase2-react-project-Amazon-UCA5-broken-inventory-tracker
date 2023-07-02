import { useEffect, useState } from 'react';
import Navbar from './NavBar';
import MealPrepList from './MealPrepList';
import ShoppingList from './ShoppingList';


function App() {
const [page, setPage] = useState("PrepList");
const [recipes, setRecipes] = useState([]);

//fetch req breakfast recipes
useEffect(() => {
  fetch("http://localhost:3000/breakfast")
  .then(r => r.json())
  .then(breakfastRecipes =>{setRecipes(breakfastRecipes);console.log(breakfastRecipes)})
}, [])

//fetch req lunch recipes
useEffect(() => {
  fetch("http://localhost:3000/lunch")
  .then(r => r.json())
  .then(lunchRecipes =>{setRecipes(lunchRecipes );console.log(lunchRecipes )})
}, [])

//fetch req dinner recipes
useEffect(() => {
  fetch("http://localhost:3000/dinner")
  .then(r => r.json())
  .then(dinnerRecipes =>{setRecipes(dinnerRecipes);console.log(dinnerRecipes)})
}, [])

return (
    <main>
    {/* move between MealPrepList and ShoppingList comp when comp mounted */}
    <Navbar onChangePage={setPage} />
    {page === "PrepList" ? <MealPrepList /> : <ShoppingList /> }
    </main>
);
}

export default App;
