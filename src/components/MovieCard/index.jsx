import { Link } from "react-router";
import "./style.css";
function MovieCard(movie) {
  return (
    <article className="movie-card">
      <img
        className="movie-card__image"
        src="https://via.placeholder.com/360x190"
        alt={movie.title}
      />
      <h2 className="movie-card__title">{movie.title}</h2>
      <p className="movie-card__year">Year: {movie.year}</p>
      <p className="movie-card__genre">Genre: {movie.genre}</p>
      <p className="movie-card__director">Director: {movie.director}</p>
      <p className="movie-card__description">{movie.description}</p>
      <Link to={`/movies/${movie.slug}`} className="movie-card__button">
        More Details
      </Link>
    </article>
  );
}

export default MovieCard;
