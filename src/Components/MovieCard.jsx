import React from "react";
import StarRate from "./StarRate";

const MovieCard = ({ movie, handleDelete }) => {
  return (
    <div>
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.title} />
      <StarRate rate={movie.rate} />
      <p>{movie.Description}</p>
      <div>
        <button className="btn" onClick={() => handleDelete(movie.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
