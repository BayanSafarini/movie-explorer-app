import movies from "../../data/movies";
import MovieCard from "../../components/MovieCard";
import "./style.css";
function Movies() {
  return (
    <main className="movies">
      <h1 className="movies__title">Movies Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </main>
  );
}

export default Movies;
