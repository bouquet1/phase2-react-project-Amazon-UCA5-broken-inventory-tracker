import { useEffect, useState } from 'react';
import Navbar from './NavBar';
import MealPrepList from './MealPrepList';
import ShoppingList from './ShoppingList';


function App() {
const [page, setPage] = useState("PrepList");
const [breakfastRecipes, setBreakfasts] = useState([]);

//fetch req breakfast recipes
useEffect(() => {
  fetch("http://localhost:3000/breakfastRecipes")
  .then(r => r.json())
  .then(breakfastRecipesData =>{setBreakfasts(breakfastRecipesData);console.log(breakfastRecipesData)})
  //console.log to see ehat is fetched inside breakfastRecipes
}, [])


return (
    <main>
    {/* move between MealPrepList and ShoppingList comp when comp mounted */}
    <Navbar onChangePage={setPage} />
    {page === "PrepList" ? <MealPrepList  breakfast={breakfastRecipes} /> : <ShoppingList /> }
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
