import { useEffect, useState } from 'react';
import Navbar from './NavBar';
import MealPrepList from './MealPrepList';
import ShoppingList from './ShoppingList';


function App() {
const [page, setPage] = useState("PrepList");
const [breakfasts, setBreakfasts] = useState([]);

//fetch req breakfast recipes
// useEffect(() => {
//   fetch("http://localhost:3000/breakfasts")
//   .then(r => r.json())
//   .then(breakfastRecipes =>{setBreakfast(breakfastRecipes);console.log(breakfastRecipes)})
// }, [])

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

return (
    <main>
    {/* move between MealPrepList and ShoppingList comp when comp mounted */}
    <Navbar onChangePage={setPage} />
    {page === "PrepList" ? <MealPrepList  breakfasts={setBreakfasts} /> : <ShoppingList /> }
    </main>
);
}

export default App;
