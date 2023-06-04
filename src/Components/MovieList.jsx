import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ list, handleDelete }) => {
  return (
    <div>
      {React.Children.toArray(
        list.map((movie) => (
          <MovieCard movie={movie} handleDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default MovieList;
