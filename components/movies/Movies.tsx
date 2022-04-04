import React from "react";
import { Movie } from "../../types/movie";
import { MovieThumbnail } from "./MoviesThumbnail";

interface IMoviesProp {
  movies: Movie[];
}

export const Movies: React.FC<IMoviesProp> = ({ movies }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {movies.map((movie: Movie) => (
        <MovieThumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
