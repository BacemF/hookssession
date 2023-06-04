import { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";

import AddMovie from "./Components/AddMovie";

import { movieData } from "./data";

function App() {
  const [data, setData] = useState(movieData);
  const handleDelete = (id) => setData(data.filter((el) => el.id !== id));
  return (
    <div className="App">
      <AddMovie />
      <MovieList list={data} handleDelete={handleDelete} />
    </div>
  );
}
export default App;
