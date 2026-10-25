import { useParams, Link } from "react-router";
import movieData from "../../data/movies";
import "./style.css";

function MovieDetails() {
  const { slug } = useParams();
  const movie = movieData.find((m) => m.slug === slug);
  if (!movie) {
    return (
      <main className="movie-details__not-found">
        <h1 className="movie-details__not-found-title">Movie Not Found</h1>
        <p className="movie-details__not-found-description">
          Sorry, we couldn't find the movie you're looking for.
        </p>
        <Link to="/movies" className="movie-details__back-link">
          Back to Movies
        </Link>
      </main>
    );
  }
  return (
    <main className="movie-details">
      <img
        className="movie-details__image"
        src="https://via.placeholder.com/210x300"
        alt={movie.title}
      />
      <h1 className="movie-details__title">{movie.title}</h1>
      <p className="movie-details__description">{movie.description}</p>
      <p className="movie-details__year">Year: {movie.year}</p>
      <p className="movie-details__genre">Genre: {movie.genre}</p>
      <p className="movie-details__director">Director: {movie.director}</p>
    </main>
  );
}

export default MovieDetails;
