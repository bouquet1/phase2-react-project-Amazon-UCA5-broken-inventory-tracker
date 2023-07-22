import { useEffect, useState } from 'react';
import Navbar from './NavBar';
import MealPrepList from './MealPrepList';
import ShoppingList from './ShoppingList';


function App() {
const [page, setPage] = useState("PrepList");
const [breakfastRecipes, setBreakfastRecipes] = useState([]);


//fetch req breakfast recipes
useEffect(() => {
  fetch("http://localhost:3000/breakfast")
  .then(r => r.json())
  .then(breakfastRecipesData =>{setBreakfastRecipes(breakfastRecipesData);console.log(breakfastRecipesData)})

}, [])

return (
    <main>
    <Navbar onChangePage={setPage} />
    {page === "PrepList" ? <MealPrepList setBreakfastRecipes={setBreakfastRecipes} breakfastRecipes={breakfastRecipes} /> : <ShoppingList /> }
    </main>
);
}

export default App;


//fetch req lunch recipes
// useEffect(() => {
//   fetch("http://localhost:3000/lunch")
//   .then(r => r.json())
//   .then(lunchRecipes =>{setLunch(lunchRecipes );console.log(lunchRecipes )})
// }, [])

//fetch req dinner recipes
// useEffect(() => {
//   fetch("http://localhost:3000/dinner")
//   .then(r => r.json())
//   .then(dinnerRecipes =>{setDinner(dinnerRecipes);console.log(dinnerRecipes)})
// }, [])
