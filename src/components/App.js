import { useState } from 'react';
import Navbar from './NavBar';
import MealPrepList from './MealPrepList';
import ShoppingList from './ShoppingList';


function App() {
const [page, setPage] = useState("PrepList");

  return (
    <main>
    <Navbar onChangePage={setPage} />
    {page === "PrepList" ? <MealPrepList /> : <ShoppingList /> }
    </main>
  );
}

export default App;
