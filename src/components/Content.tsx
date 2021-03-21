import '../styles/content.scss';

import { MovieCard } from './MovieCard';

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  genre: string;
  movies: Movie[];
};

export function Content({genre, movies}: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genre}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}