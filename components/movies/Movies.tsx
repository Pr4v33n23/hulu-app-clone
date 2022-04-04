import React from "react";
import { Movie } from "../../types/movie";
import { MovieThumbnail } from "./MoviesThumbnail";

interface IMoviesProp {
  movies: Movie[];
}

export const Movies: React.FC<IMoviesProp> = ({ movies }) => {
  return (
    <div>
      {movies.map((movie: Movie) => (
        <MovieThumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
