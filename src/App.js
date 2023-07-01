import { useState } from 'react';
import Navbar from './components/NavBar';


function App() {
const [page, setPage] = useState("PrepList");

  return (
    <div className="App">
    <Navbar onChange={setPage} />
    {page === "PrepList" ? <MealPrepList /> : <ShoppingList /> }
    </div>
  );
}

export default App;
