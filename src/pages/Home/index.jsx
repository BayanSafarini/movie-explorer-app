import { Link } from "react-router";
function Home() {
  return (
    <main className="home">
      <h1 className="home__title">Welcome to Movie Explorer!</h1>
      <p className="home__description">
        Explore a wide range of movies and find your new favorite!
      </p>
      <Link to="/movies" className="home__button">
        Explore Movies
      </Link>
    </main>
  );
}

export default Home;
