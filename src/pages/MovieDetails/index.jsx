import { useParams } from "react-router";
import movieData from "../../data/movies";
import "./style.css";

function MovieDetails() {
  const { movieName } = useParams();
  const movie = movieData.find((m) => m.title === movieName);
  return (
    <main className="movie-details">
      <img
        className="movie-details__image"
        src="https://via.placeholder.com/100x140"
        alt={movie.title}
      />
      <h1 className="movie-details__title">{movieName}</h1>
      <p className="movie-details__description">{movie.description}</p>
      <p className="movie-details__year">Year: {movie.year}</p>
      <p className="movie-details__genre">Genre: {movie.genre}</p>
      <p className="movie-details__director">Director: {movie.director}</p>
    </main>
  );
}

export default MovieDetails;
