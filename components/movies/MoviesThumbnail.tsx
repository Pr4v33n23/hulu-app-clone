import Image from "next/image";
import React from "react";
import { Movie } from "../../types/movie";


interface IMovieThumbnailProps {
    movie: Movie
}

export const MovieThumbnail: React.FC<IMovieThumbnailProps> = ({movie}) => {
console.log(movie);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        height={1080}
        width={1920}
        alt="thumbnail"
      />
    </div>
  );
};
