import { Link } from "react-router";
import "./style.css";

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Page Not Found</h2>
      <p className="not-found__description">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="not-found__button">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;
